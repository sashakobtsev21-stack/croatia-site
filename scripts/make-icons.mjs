/*
 * make-icons.mjs — растеризует хорватскую «шаховницу» (см. public/favicon.svg) в PNG-иконки
 * PWA/Apple/Google. Единый источник дизайна — та же 5×5 клетка (13 красных + 12 белых,
 * верх-лево красное, #d52b1e как у флага в шапке). Запуск: `node scripts/make-icons.mjs`.
 *
 * Зачем PNG, если есть SVG-фавикон: Apple touch-icon и PWA-манифест требуют PNG; Google в
 * выдаче надёжнее берёт растровый фавикон кратный 48px (icon-48.png) — отдаём и его.
 * Полнокадровая клетка (без скруглений) — ОС/лаунчер сами скругляют/маскируют (maskable ок:
 * фон до краёв, у клетки нет «важного центра», который мог бы обрезаться).
 */
import sharp from 'sharp';

const RED = '#d52b1e';
const N = 5;
const SQ = 32 / N; // 6.4
const rects = [];
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if ((r + c) % 2 === 0) {
      rects.push(
        `<rect x="${(c * SQ).toFixed(3)}" y="${(r * SQ).toFixed(3)}" width="${SQ.toFixed(3)}" height="${SQ.toFixed(3)}"/>`,
      );
    }
  }
}
const svg = (size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">` +
  `<rect width="32" height="32" fill="#ffffff"/><g fill="${RED}">${rects.join('')}</g></svg>`;

// Рендерим один раз в 512 (чёткий вектор), затем downscale — это резче, чем upscale из мелкого.
const base512 = await sharp(Buffer.from(svg(512))).png().toBuffer();

const OUT = [
  ['public/icons/icon-512.png', 512],
  ['public/icons/icon-512-maskable.png', 512],
  ['public/icons/icon-192.png', 192],
  ['public/icons/apple-touch-icon-180.png', 180],
  ['public/icons/icon-48.png', 48],
];

for (const [path, size] of OUT) {
  const buf = size === 512 ? base512 : await sharp(base512).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
  await sharp(buf).png({ compressionLevel: 9 }).toFile(path);
  console.log('wrote', path, `${size}×${size}`);
}
console.log('done');
