/**
 * English UI dictionary (SPEC §12).
 * In components, strings come only from the dictionary — hardcoding is forbidden.
 */
import type { UIDictionary } from './types';

export const en: UIDictionary = {
  siteName: 'Croatia Guidebook',
  tagline: 'Croatia travel guide: vetted places',
  langName: 'English',
  skipToContent: 'Skip to content',
  backToTop: 'Back to top',
  notFound: {
    heading: 'Page not found',
    text: 'The page you are looking for doesn’t exist or has moved. Use the menu above or head back to the homepage.',
    home: 'Go to homepage',
  },
  liveData: {
    heading: 'Right now in Croatia',
    desc: 'Weather in the main cities and the Adriatic sea temperature — check before you travel.',
    weather: 'Weather',
    sea: 'Sea, Adriatic',
    cities: { zagreb: 'Zagreb', split: 'Split', dubrovnik: 'Dubrovnik' },
    updated: 'updated',
    source: 'weather: open-meteo',
  },
  nav: {
    home: 'Home',
    dostoprimechatelnosti: 'What to see',
    goroda: 'Cities',
    eda: 'Food',
    razvlecheniya: 'Entertainment',
    marshruty: 'Routes',
    planirovanie: 'Before you go',
    transport: 'Transport',
    'arenda-avto': 'Car rental',
    strahovka: 'Insurance',
    novosti: 'News',
    relokatsiya: 'Relocation',
    'o-sajte': 'About',
    kontakty: 'Contact',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuShort: 'Menu',
    primaryNav: 'Primary navigation',
  },
  lang: {
    label: 'Language',
    switchTo: 'Switch to {lang}',
  },
  footer: {
    disclaimer:
      'Some links on the site are affiliate links. This does not change the price for you and helps support the project.',
    navHeading: 'Sections',
    note: 'Places are chosen by rating and cross-checked with experienced travelers, guides and locals.',
    creatorPrefix: 'Made by',
    creator: 'KOBTSEV',
  },
  verified: {
    inPlace: 'Verified · {date}',
    short: 'Verified',
    updated: 'Updated · {date}',
    caption: 'by experienced travelers, guides, and locals',
    photoAlt: 'Photo of the place',
    samplePlaceholder: 'date verified',
  },
  home: {
    heroTitle: 'Croatia travel guide: vetted places',
    heroSubtitle:
      'Plan your Croatia trip without the tourist traps: we pick places by rating and cross-check them with guides and locals. Updated regularly.',
    heroCredit: 'Photo: Braveheart / Wikimedia Commons · CC BY-SA 4.0',
    photoPrefix: 'Photo',
    search: {
      label: 'Search the site',
      placeholder: 'Where are you headed? Kazbegi, Tbilisi, car rental…',
      emptyNoContent: 'Nothing found yet. Try another word — search runs over the articles already published.',
      emptyNoMatch: 'Nothing found. Try a different query.',
      hint: 'Search runs over already published articles, right in your browser.',
    },
    entriesHeading: 'Where to start',
    tiles: {
      dostoprimechatelnosti: 'Nature, churches, fortresses, waterfalls, and canyons of Georgia',
      goroda: 'City guides: what to see, where to eat, how to get around',
      eda: 'What to try and where to eat honestly — without tourist markups',
      razvlecheniya: 'Where to go out: clubs and bars, quizzes, beaches, casinos, and parks',
      marshruty: 'Ready-made road trips: a day-by-day plan, budget, and map',
    },
    showcase: {
      heading: 'Georgia showcase',
      lead: 'The best places, routes and vetted venues — Georgia at a glance.',
      partnerNote: 'Includes partner placements.',
      aria: 'Showcase: featured places, routes and venues',
      adKicker: 'Advertising',
      adTitle: 'Place your business here',
      kickers: {
        city: 'City',
        route: 'Route',
        sight: 'See',
        food: 'Food',
        nightlife: 'Nightlife',
      },
    },
    allSectionsHeading: 'All sections',
    trustHeading: 'Verified by experienced travelers, guides, and locals',
    trustLead:
      'We don’t rely on memory or old blog posts. Every place is chosen and cross-checked across several sources, so the details stay current.',
    trust: {
      ratingTitle: 'Selected by high ratings',
      ratingText: 'The guide includes places rated 4+★ across several independent sources.',
      localsTitle: 'Confirmed by locals and guides',
      localsText:
        'We check the details with experienced travelers, guides, and locals, not from old blogs.',
      updatedTitle: 'Regular updates',
      updatedText: 'Each article shows the date of its last check — we revisit them by season.',
    },
    badgeSampleHeading: 'What the verification mark looks like',
    sectionsHeading: 'Guide sections',
    freshHeading: 'Latest articles',
    freshEmpty: 'Nothing to show here right now — please check back soon. We keep adding vetted, up-to-date guides.',
    about: {
      heading: 'About the project',
      text: 'Georgia Guidebook is a travel guide to Georgia: attractions, cities, food, routes, and car rental. We pick places by rating, cross-check the facts, and date-stamp every article — here’s how we work.',
      link: 'More about the project',
    },
  },
  newsFeed: {
    recentHeading: 'Latest news',
    all: 'All news',
    recentEmpty: 'No recent news yet.',
  },
  actions: {
    more: 'Read more',
    affiliateDisclosure: 'Affiliate link — the price for you stays the same.',
  },
  breadcrumbs: {
    home: 'Home',
    aria: 'Breadcrumbs',
  },
  hub: {
    listHeading: 'In this section',
    empty:
      'The first articles in this section are coming soon. We’re preparing vetted guides with up-to-date information.',
    sections: {
      dostoprimechatelnosti: {
        intro: [
          'What to see in Croatia — the Adriatic coast and islands, the waterfalls of Plitvice and Krka, the old towns of Dubrovnik and Split, Istrian hill towns and the national parks. Browse the catalog by type and region and open a card for the details: what to see, how to get there, and when to go.',
        ],
      },
      goroda: {
        intro: [
          'City guides across Croatia — Zagreb, Split, Dubrovnik, Rijeka, Zadar and the coastal towns: what to see, where to eat, how to get there and where to stay, with links to nearby routes, food and car rental so your whole trip is in one place.',
        ],
      },
      razvlecheniya: {
        intro: [
          'Things to do in Croatia beyond the sights — beaches and islands, nightlife, festivals, parks and museums. Each place lists where it is, the price and the opening hours, so a night out or a day trip is easy to plan ahead.',
        ],
      },
      marshruty: {
        intro: [
          'Ready-made road trips around Croatia: a day-by-day plan, a budget guideline, key stops and a map. A car opens up the coast, the islands and the national parks; the best season runs from late spring to autumn. The mileage, days and budget in the cards are guidelines, not exact measurements.',
        ],
      },
      transport: {
        intro: [
          'Getting around Croatia — airports (Zagreb, Split, Dubrovnik, Zadar, Pula, Rijeka), ferries to the islands, trains, buses and transfers. Practical guides on how to get from point to point and roughly how long it takes; handy to plan together with the Car rental and Routes sections.',
        ],
      },
      'arenda-avto': {
        intro: [
          'Car rental in Croatia — where to pick up a car, what it costs, deposits and the catches in the contracts. We break rental down by city and airport and compare international aggregators with local companies; prices are marked with a check date, not passed off as evergreen.',
        ],
      },
      strahovka: {
        intro: [
          'Travel and long-stay insurance for Croatia — which policies actually work for tourists, nomads and relocators, how they differ and what to check when choosing. As an EU and Schengen country, the relevant cover is Schengen travel insurance and nomad or long-stay plans.',
        ],
      },
      planirovanie: {
        intro: [
          'Planning a trip to Croatia — entry and Schengen rules, when to go, budget, money (the euro) and insurance. Short, practical answers with links to the sections that cover each topic in depth; regulatory details are dated and link to the official source.',
        ],
      },
      novosti: {
        intro: [
          'Updates to the guide: newly vetted places, seasonal tips and changes worth knowing before a trip. We keep only what actually affects trip planning, and every entry shows a date so you know how current it is.',
        ],
      },
    },
  },
  map: {
    placeHeading: 'On the map',
    placeAria: 'Interactive map with the location of the place',
    placeHint: 'The map loads on click — to keep the page lightweight.',
    show: 'Show map',
    error: 'The map didn’t load. Check your connection and refresh the page.',
    attribution: '© OpenStreetMap contributors',
    openInGoogle: 'Open in Google Maps',
    label: 'Map · Google',
  },
  access: {
    heading: 'Distance',
    km: 'km',
    origins: {
      zagreb: 'Zagreb',
      split: 'Split',
      dubrovnik: 'Dubrovnik',
    },
  },
  visit: {
    heading: 'Admission and opening hours',
    price: 'Admission price',
    hours: 'Opening hours',
    checked: 'Details checked',
  },
  gallery: {
    heading: 'Photos',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  hotelWidget: {
    heading: 'Search and book hotels',
    cta: 'Show hotel search',
    note: 'Trip.com partner widget. Loads on click. Prices and availability are on the service’s side.',
    frameTitle: 'Hotel search in Georgia — Trip.com',
  },
  article: {
    tocHeading: 'Contents',
    relatedHeading: 'Read also',
    about: {
      heading: 'How we select and verify places',
      text: 'Places make it into the guide by high ratings across several independent sources and are cross-checked with experienced travelers, guides, and locals. We don’t reprint others’ ratings verbatim and we update articles regularly — each one shows the date it was checked.',
      link: 'More about the project',
    },
    demoNoteHeading: 'An example listing',
    demoNote:
      'This is a sample card for this section — a real venue will appear here with its address, opening hours, prices and our own description. Want your venue featured? Get in touch via the Contact page.',
    demoLabel: 'Example',
  },
  route: {
    summary: {
      days: 'Days on the road',
      daysValue: '{count}',
      distance: 'Distance',
      distanceValue: '≈{km} km',
      budget: 'Budget from',
      season: 'Best season',
    },
    timelineHeading: 'Route day by day',
    timelineAria: 'Route stops in order',
    stopKm: '{km} km from the start',
    stopStart: 'Route start',
    stopStay: 'stop ≈{min} min',
    mapHeading: 'Route map',
    mapHint: 'The map with stops loads on click — to keep the page lightweight.',
    mapAria: 'Interactive route map with stops',
    affiliateHeading: 'A car for this route',
    affiliatePlaceholder:
      'The most convenient way to do this route is by car. How to get a car without surprises is in the “Car rental” section.',
    affiliateNote: 'Get a car for this route — compare prices on Trip.com.',
    affiliateHotelsHeading: 'Where to stay along the route',
    affiliateHotelsNote: 'Overnight stops along the way — hotels and apartments on Trip.com.',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    demoNote:
      'Mileage, travel time, and budget are rounded guidelines. Before your trip, verify the current figures, prices, and road conditions.',
  },
  about: {
    heading: 'About the project',
    breadcrumb: 'About',
    intro: [
      'Georgia Guidebook is a guide to all of Georgia, available in English, Russian and Ukrainian. We bring together in one place everything you need for a trip: attractions, cities, food, ready-made routes, car rental, insurance, and news. The goal is simple — to help you plan a trip without outdated advice and tourist traps.',
      'We don’t write “from memory” and we don’t retell other people’s articles. The guide has a clear principle: how we select places, how we verify facts, and why each article shows the date it was checked. More on that below.',
    ],
    sections: [
      {
        heading: 'How we select places',
        paragraphs: [
          'Not everything makes it into the guide — only places with high ratings, from 4★ and up, and across several independent sources at that. If a place is rated well in just one place while others are silent or negative about it, that’s not a consensus for us, and we don’t add it.',
          'A high rating from several sources is a filter at the entrance, not a finished article. Then our work begins: our own honest description, a check of the details, and a current date. Thin “tick-the-box” spots with no real value don’t make it into the guide.',
        ],
      },
      {
        heading: 'How we verify facts',
        paragraphs: [
          'We cross-check the details — how to get there, when to go, what to budget time and money for — with experienced travelers, guides, and locals, rather than taking them from blogs five years old. That’s collective verification: several points of view instead of a single opinion.',
          'Each article shows the date of its last check or update. So you immediately know how current the information is. We revisit articles by season: places change, some close, prices and terms drift — the guide should reflect that.',
        ],
      },
      {
        heading: 'Honest about figures and prices',
        paragraphs: [
          'We don’t reprint others’ ratings and review counts verbatim — that’s platform data, and their rules forbid such copying. For us a rating is a selection criterion, not content: to see the current rating and reviews, follow the link to the source or the map.',
          'Prices, opening hours, and terms in our articles are guidelines as of the check date, not a guarantee. Georgia changes fast, so always verify the details that matter for your trip (the rental price, the deposit, the admission cost) on the other side before you pay.',
        ],
      },
      {
        heading: 'How the project runs',
        paragraphs: [
          'Some links on the site are affiliate links: car rental, accommodation, tours, insurance, connectivity. If you follow such a link and book something, we get a small commission from the service. The price for you stays the same — and the project exists and is updated on these funds.',
          'Partnership doesn’t affect selection: a place makes it into the guide for its rating and verification, not because it has an affiliate program. If it’s better or more honest to recommend an option without an affiliate link, we recommend it.',
        ],
      },
    ],
    feedback: {
      heading: 'Spotted an inaccuracy?',
      text: 'The guide lives on updates. If a place has closed, prices or terms have changed — or you want to suggest a good place — write to us. That keeps the information current for everyone.',
      link: 'Go to contact',
    },
  },
  insurance: {
    heading: 'Insurance for a trip to Georgia: rules and where to get it',
    breadcrumb: 'Insurance',
    intro: [
      'As of 2026, medical insurance has become mandatory for all foreign tourists entering Georgia. It used to be optional — now without a policy you may be refused entry at the border. Below are the current rules, the minimum requirements for a policy, and the services through which you can get one.',
      'The topic is regulatory: the wording of the law and the border-check procedures may be refined. So we’ve gathered the key requirements into one block and advise verifying them against official sources before your trip — links to the primary sources are at the bottom of the page.',
    ],
    updatedIso: '2026-06-14',
    callout: {
      heading: 'Current rules (from January 1, 2026)',
      disclaimer:
        'As of January 1, 2026, medical insurance is mandatory for all foreign tourists entering Georgia. This is a regulatory requirement, and the details (wording, amounts, check procedures) may change — be sure to verify they’re current before your trip.',
      sourceNote:
        'The primary source is official resources: embassies, the Ministry of Foreign Affairs, and the Government of Georgia (Resolution No. 602 of 26.12.2025). Links to the sources are at the bottom of the page.',
    },
    guideLink: 'In depth: how to choose and buy a policy',
    requirements: {
      heading: 'What you need to know',
      items: [
        'Insurance is mandatory for all foreign tourists — citizens of Russia, Ukraine, Kazakhstan, Belarus, and other countries. A policy is needed for children too.',
        'The minimum coverage is 30,000 GEL.',
        'The policy must cover the entire trip: from the entry date to the exit date.',
        'The issuer can be either a Georgian or a foreign insurance company.',
        'Coverage must include both medical expenses and accident insurance — by requirement it’s a “health and accident” policy. Medical evacuation and repatriation are additionally mentioned.',
        'The policy language is English or Georgian. A policy only in Russian or Ukrainian without a translation may not be accepted at the border.',
        'The policy is checked on entry: at airports — systematically, at land border crossings — selectively. Without it, entry may be refused. Airlines may check for a policy as early as check-in.',
        'The legal basis is the Law of Georgia “On Tourism” (Art. 12) and Government of Georgia Resolution No. 602 of 26.12.2025.',
      ],
    },
    penalty: {
      heading: 'Fine for not having a policy',
      paragraphs: [
        'The base fine for not having mandatory insurance is 300 GEL. Besides the fine, entry may be refused, so it’s better to get a policy in advance rather than counting on “paying extra on site.”',
        'For active travel — trekking, skiing, rafting, and other extreme activities — you need a separate coverage option: a basic tourist policy may not cover such cases. Verify the exact fine amounts and coverage terms for extreme activities with the insurer and in official sources before your trip.',
      ],
    },
    services: {
      heading: 'Where to get a policy',
      lead: 'Below are the services through which travelers most often get insurance for Georgia. Whichever option you choose, check that the policy meets the requirement: coverage of at least 30,000 GEL for the entire trip, the language is English or Georgian, and accident insurance is included (basic plans often don’t have it — it’s added as a separate option). Prices depend on age, duration, and the coverage set, so we give only guidelines, without exact amounts.',
      ctaPlaceholder: 'Sign up on the service’s website. Before buying, verify the current terms and rate.',
      items: [
        {
          name: 'EKTA',
          note: 'a working option for everyone, including citizens of Ukraine',
          text: 'Online insurance paid by card from anywhere in the world; the policy arrives by email. Coverage is easy to adjust, and the limit can be raised to 30,000 USD — well above the 30,000 GEL requirement. The service’s legal entity is registered in an offshore jurisdiction — this doesn’t affect how the policy works, but keep it in mind.',
        },
        {
          name: 'SafetyWing (Nomad Insurance)',
          note: 'for digital nomads and long trips',
          text: 'Subscription insurance billed monthly — convenient for those who live in Georgia or travel for a long time and don’t want to buy a policy for a fixed period. Suits a relocation and wintering scenario. The service has changed its terms and rates — verify the current ones before buying.',
        },
        {
          name: 'Cherehapa, Polis812',
          note: 'aggregators for citizens of Russia',
          text: 'Comparison services: they show offers from several insurers at once and help you pick a policy for the limit and duration you need. Handy when you want to compare terms in one place; the set of insurers and the service’s availability change over time — go by the current list on the service itself.',
        },
        {
          name: 'TBC Insurance, Aldagi, GPI',
          note: 'local Georgian insurers',
          text: 'Georgian companies: the policy is issued from the start in English or Georgian and for the local 30,000 GEL limit. This is the most “risk-free” option for meeting the requirement — the policy is guaranteed to fit the local rules and the language of the check.',
        },
      ],
    },
    affiliate: {
      title: 'Get SafetyWing insurance',
      note: 'Nomad Insurance billed monthly — convenient for long trips and living in Georgia. Before buying, verify the current terms and that they meet the entry requirements.',
      label: 'Sign up online',
    },
    notes: {
      heading: 'What’s important to keep in mind',
      items: [
        'Check that the policy includes accident insurance. Georgia’s requirement is a “health and accident” policy, and in basic medical plans an accident often comes as a separate option: medical coverage alone may not be enough.',
        'Citizens of Ukraine find it more convenient to get a policy through EKTA or Ukrainian services (for example, Green Travel, Finance.ua). This is a practical recommendation based on service availability, not a ban: “Russian insurance is banned for Ukrainians” is an unconfirmed claim, and we don’t present it as a rule.',
        'Buy the policy before entering Georgia: some services have a 5–7 day “waiting period” — the insurance doesn’t take effect immediately after payment.',
        'Visa-free entry (for many countries — up to 1 year) does not cancel the insurance requirement: these are different things.',
        'Car rental insurance is a separate matter. A medical policy doesn’t cover damage to the car: for the rental you need your own insurance (CDW / collision), which is arranged together with the rental.',
      ],
      rentalLink: 'More about car rental and its insurance',
    },
    claims: {
      heading: 'What to do in case of a claim',
      items: [
        'Keep your insurer’s assistance service contact (usually a 24/7 phone line or app) — it’s listed in your policy. Save it to your phone before the trip.',
        'If you fall ill or get injured, call the assistance service first whenever possible: many policies require treatment to be pre-authorised. If you go to a clinic without it, the costs may not be reimbursed.',
        'Keep all documents: bills and payment receipts, discharge notes, diagnoses, referrals and prescriptions. Without supporting documents, reimbursement is difficult.',
        'Check how your policy works: the insurer either pays the clinic directly (direct billing) or you pay yourself and are reimbursed later against your receipts.',
        'Respect the deadline for filing a claim — it’s stated in your policy terms. Don’t delay: late claims are often rejected.',
        'Georgia’s single emergency number is 112 (ambulance, police, rescue). In a serious situation, call for help first and sort things out with the insurer afterwards.',
      ],
    },
    photos: [
      {
        src: '/images/strahovka/g1.webp',
        alt: 'A mountain pass and green valley in the mountains of Svaneti',
        caption:
          'For active travel in remote mountains it’s well worth getting insurance with the right coverage: help can be a long way off here.',
        credit: 'Photo: Andrew Dubok / Wikimedia Commons, CC BY-SA 3.0',
      },
      {
        src: '/images/strahovka/g2.webp',
        alt: 'A forest trail towards Mount Ushba in Svaneti',
        caption:
          'A basic policy may not cover trekking, skiing or rafting — for active travel you need a separate option.',
        credit: 'Photo: FingerWiki / Wikimedia Commons, CC BY-SA 4.0',
      },
    ],
    sources: {
      heading: 'Sources',
      items: [
        'U.S. Embassy in Georgia — the requirement for mandatory medical insurance for entry.',
        'Government of Georgia Resolution No. 602 of 26.12.2025 and the Law “On Tourism” (Art. 12) — text at matsne.gov.ge/ka/document/view/6728816.',
        'Ministry of Foreign Affairs of Georgia, Consular Service (entry rules) — geoconsul.gov.ge.',
        'Georgian insurance companies (TBC Insurance, Aldagi, GPI) — coverage limit and policy language.',
      ],
    },
  },
  contacts: {
    heading: 'Contact',
    breadcrumb: 'Contact',
    intro: [
      'The guide stays current thanks in part to readers. If you’ve spotted outdated information, know a good place, or have a question about a trip — tell us.',
      'There are no forms on the site — this is a deliberate choice: less spam and no storing of your personal data. For suggestions, advertising, and any questions, write to us by email — it’s listed below.',
    ],
    reasonsHeading: 'What’s worth writing about',
    reasons: [
      'A place has closed, moved, or its prices and terms have changed — we’ll help update the article.',
      'You want to suggest a vetted place, route, or tip for the guide.',
      'Advertising, collaboration, or a commercial proposal — we’ll discuss placement terms.',
      'You have a trip question you didn’t find an answer to in the articles.',
      'You found an error or inaccuracy in the text.',
    ],
    channels: {
      heading: 'How to get in touch',
      emailLabel: 'Write to us by email:',
      email: 'info@croatiaguidebook.com',
      emailUrl: 'mailto:info@croatiaguidebook.com',
    },
  },
  relocation: {
    heading: 'Relocating to Georgia: how to settle in',
    breadcrumb: 'Relocation',
    uslugi: {
      heading: 'Services for living in Georgia',
      text: 'Real estate agents, cleaning, moving, repairs, documents, translators — a directory of vetted services so you don’t have to dig through chats.',
      cta: 'Open services',
    },
    intro: [
      'Georgia is one of the easiest destinations for a long winter stay and relocation: visa-free entry for citizens of many countries for a long period, inexpensive living, fast internet, and large Russian- and Ukrainian-speaking communities. This section is a practical guide to settling in on the ground.',
      'We start with the non-regulatory things everyone needs: housing, connectivity, banking, transport, insurance. Documents, visas, and taxes are regulated by the state, and they change periodically — for those we give direct links to official sources and are preparing separate breakdowns.',
    ],
    updatedIso: '2026-06-15',
    callout: {
      heading: 'Documents and taxes change — verify with the primary source',
      disclaimer:
        'The rules for entry, residence permits, business registration, and taxes in Georgia are revised periodically. Don’t rely on retellings in chats and outdated articles — verify the terms as of the time of your move directly with the government bodies (links below).',
      sourceNote:
        'That’s why we don’t fix specific deadlines, amounts, and requirements here as unchanging, but point you to the official sites — they always have the current version.',
    },
    guides: {
      heading: 'Detailed guides',
      lead: 'In-depth, non-regulatory how-tos for settling in — updated as things change.',
    },
    steps: {
      heading: 'Where to start on the ground',
      items: [
        {
          title: 'Housing for your first weeks',
          text: 'For the first weeks it’s convenient to stay in a hotel, guesthouse, or apart-hotel, and look for a long-term rental on the ground, having seen the neighborhood in person. The largest local listing boards are myhome.ge and ss.ge; there are also many options through local chats and agencies.',
        },
        {
          title: 'SIM card and internet',
          text: 'A local SIM is sold with a passport at the airport and at operators’ offices — the main ones are Magti and Silknet. Mobile internet is fast and inexpensive, Wi-Fi is everywhere in the cities; this is one of Georgia’s strengths for remote work.',
        },
        {
          title: 'Bank account',
          text: 'An account and a card are opened for foreigners by the major banks — Bank of Georgia and TBC. Requirements and check times are periodically tightened, so verify the document set and terms at a branch in advance.',
        },
        {
          title: 'Long-term rental',
          text: 'The lease is usually for 6–12 months, with a deposit most often equal to one month. Prices depend on the city and season: in summer Batumi is more expensive, while in Tbilisi demand is steadier. Check the meters, the internet, and who pays for utilities.',
        },
        {
          title: 'Transport and getting around',
          text: 'In the cities — cheap public transport (in Tbilisi, the metro and buses with a Metromoney card); between cities — trains, buses, and marshrutkas. For freedom of movement many rent a car — how that works is in our rental section.',
        },
        {
          title: 'Health and insurance',
          text: 'There are public and private clinics; the level of private medicine in the big cities is good. For the move and for trips, medical insurance with coverage abroad is convenient — options are in our insurance section.',
        },
        {
          title: 'Daily life and community',
          text: 'Lari (₾) — cash is needed in the regions, while in the cities cards are accepted almost everywhere. Tbilisi and Batumi have large Russian- and Ukrainian-speaking communities, and cafes and services often speak English — it’s easy to adapt even without Georgian.',
        },
      ],
    },
    affiliate: {
      title: 'Where to stay the first weeks',
      note: 'Hotels and apartments for your first weeks in Georgia — compare prices on Trip.com.',
      label: 'Find a place for your first weeks',
    },
    esim: {
      title: 'eSIM with internet for your first days',
      note: 'Mobile internet from arrival, until you get a local SIM — the eSIM activates online.',
      label: 'Buy an eSIM for Georgia',
    },
    links: {
      heading: 'What’s already on the site',
      lead: 'Practical sections that come in handy when relocating:',
      items: [
        { section: 'strahovka', text: 'medical insurance with coverage abroad' },
        { section: 'arenda-avto', text: 'car rental: how, where, and without overpaying' },
        { section: 'transport', text: 'how to get there and travel between cities' },
        { section: 'goroda', text: 'Georgia’s cities — where to live and what’s nearby' },
        { section: 'eda', text: 'where to eat: vetted places by city' },
      ],
    },
    regulatory: {
      heading: 'Documents, visas, and taxes: official sources',
      lead: 'For these topics we point you straight to government sites — they have the current rules, deadlines, and amounts. We prepare separate breakdowns relying on these same sources.',
      items: [
        {
          topic: 'Visa, visa-free entry, and length of stay',
          org: 'MFA of Georgia · Consular Service',
          url: 'https://geoconsul.gov.ge/en',
        },
        {
          topic: 'Residence permit',
          org: 'Public Service Development Agency',
          url: 'https://sda.gov.ge/en/',
        },
        {
          topic: 'Sole proprietor and the “small business” tax (1%)',
          org: 'Revenue Service of Georgia',
          url: 'https://rs.ge/',
        },
        {
          topic: 'Registering a company or sole proprietorship',
          org: 'National Agency of Public Registry',
          url: 'https://napr.gov.ge/en',
        },
        {
          topic: 'Driver’s license and vehicle registration',
          org: 'Service Agency of the Ministry of Internal Affairs',
          url: 'https://sa.gov.ge/',
        },
      ],
      linkLabel: 'official site',
    },
    notes: {
      heading: 'Nuances people ask about',
      items: [
        'The language is Georgian, but in the cities you can easily get by with English and Russian: signs and menus are often duplicated.',
        'The money is the lari (₾). We show the current rate against the dollar, euro, ruble, and hryvnia on the home page in the “Right now in Georgia” block.',
        'Internet and connectivity are cheap and fast, which is why remote workers love Georgia.',
        'Housing in Batumi gets noticeably more expensive in the summer season — worth keeping in mind for a long-term rental.',
      ],
    },
    sources: {
      heading: 'Official sources',
      items: [
        'MFA of Georgia, Consular Service (visa, entry) — geoconsul.gov.ge',
        'Public Service Development Agency (residence permit, civil registry) — sda.gov.ge',
        'Revenue Service of Georgia (taxes, small business status) — rs.ge',
        'National Agency of Public Registry (business registration) — napr.gov.ge',
        'Service Agency of the Ministry of Internal Affairs of Georgia (license, vehicle registration) — sa.gov.ge',
      ],
    },
  },
  eda: {
    heading: 'Where to eat in Georgia',
    lead: 'Restaurants, cafes, wine bars, bakeries and markets — by city. Each place has its address, hours, our honest write-up and a link to the map.',
    breadcrumbHome: 'Home',
    filtersLegend: 'Place filters',
    filters: {
      cityLabel: 'City',
      districtLabel: 'District',
      cuisineLabel: 'Cuisine',
      priceLabel: 'Price level',
      anyOption: 'Any',
      reset: 'Reset filters',
    },
    cuisineKeys: {
      croatian: 'Croatian',
      seafood: 'Seafood',
      wine: 'Wine bar',
      cafe: 'Café',
      bakery: 'Bakery',
      vegetarian: 'Vegetarian',
      asian: 'Asian',
      street: 'Street food',
      bar: 'Bar',
    },
    priceHint: 'Price level: € — cheap, €€ — mid-range, €€€ — above average.',
    sponsoredBadge: 'Partner',
    illustrativeBadge: 'Illustration',
    dishesLabel: 'Prices for main dishes',
    dishesHint: 'a guideline, check on site',
    hoursLabel: 'Opening hours',
    cuisineGuide: 'What to try in Croatia: a guide to the cuisine',
    lodgingHeading: 'Where to stay in Croatia',
    lodgingInCity: 'Where to stay in {city}',
    lodgingNote: 'Hotels and apartments near the best places — compare on Trip.com.',
    onMap: 'On the map',
    onMapAria: 'Open “{name}” on the map (in a new tab)',
    website: 'Website',
    resultsCount: 'Places shown: {count}',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData: 'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
    selectionHeading: 'How we pick these places',
    selectionNote:
      'Places make it here on merit: we take venues with high ratings (4+★) across several sources and cross-check them with experienced travelers, guides and locals. A rating is a selection criterion, not the write-up itself — we don’t reprint other sites’ scores word for word; see the exact rating on the map. We write every description ourselves. The gold medal on a card is our seal of quality: only places we have checked in person that meet a high standard of service and food quality receive it.',
    cityPages: {
      navHeading: 'Where to eat, by city',
      picksHeading: 'Our vetted places',
      backToAll: 'The whole “Where to eat” directory',
      cityGuideLink: 'City guide',
      items: {
        zagreb: {
          cityName: 'Zagreb',
          heading: 'Zagreb restaurants & cafes',
          lead: 'Zagreb is the capital of Croatia and its biggest dining scene: continental Croatian cooking, the Dolac market and a strong coffee-house culture.',
          intro: [
            'In Zagreb the food leans continental — hearty Croatian dishes like štrukli, grilled meats and seasonal produce from the Dolac and Britanski trg markets, alongside modern bistros and a famous café scene in the Upper Town and along Tkalčićeva.',
            'Below are our vetted places. What to try across the country is in the guide to the cuisine; each venue lists the check date.',
          ],
        },
        split: {
          cityName: 'Split',
          heading: 'Split restaurants & cafes',
          lead: 'Split is Dalmatia on a plate: fresh Adriatic seafood, slow-cooked peka and family konoba taverns around the Diocletian Palace.',
          intro: [
            'The cooking in Split is coastal Dalmatian — grilled fish and shellfish, black risotto, peka (meat or octopus baked under a bell), and olive oil and wine from the islands. The old town and Varoš are dense with konobas; prices climb on the busiest tourist streets.',
            'Below are our vetted places. For the dishes worth ordering, see the guide to the cuisine; each venue shows the check date.',
          ],
        },
        dubrovnik: {
          cityName: 'Dubrovnik',
          heading: 'Dubrovnik restaurants & cafes',
          lead: 'Dubrovnik is upmarket Dalmatian dining: Adriatic seafood, oysters from nearby Ston and terraces with Old Town and sea views — at tourist-city prices.',
          intro: [
            'The gastronomy of Dubrovnik is southern Dalmatian and noticeably pricier than the rest of the country: fresh fish and shellfish, Ston oysters from the Pelješac peninsula, and seafood terraces inside and just outside the city walls. A little away from the Stradun it gets calmer and cheaper.',
            'Below are our vetted places. What to try is in the guide to the cuisine; each venue lists the check date.',
          ],
        },
      },
    },
  },
  attractionTypes: {
    'gory-priroda': 'Mountains and nature',
    'vodopady-kanony-ozera': 'Waterfalls, canyons, lakes',
    peschery: 'Caves and cave towns',
    'hramy-monastyri': 'Churches and monasteries',
    'kreposti-zamki': 'Fortresses and castles',
    'kurorty-termy': 'Resorts and hot springs',
    'muzei-gorodskoe': 'Museums and city sights',
  },
  regions: {
    istria: 'Istria',
    kvarner: 'Kvarner',
    'dalmatia-north': 'North Dalmatia',
    'dalmatia-central': 'Central Dalmatia',
    'dalmatia-south': 'South Dalmatia',
    'lika-karlovac': 'Lika & Karlovac',
    'central-croatia': 'Central Croatia',
    slavonia: 'Slavonia',
  },
  razvlTypes: {
    'nochnaya-zhizn': 'Nightlife',
    afisha: 'What’s on',
    aktivnyy: 'Active leisure',
    kazino: 'Casinos',
    mesta: 'Places',
  },
  serviceRubrics: {
    'zhilyo-rieltory': 'Housing and real estate agents',
    klining: 'Cleaning',
    pereezd: 'Moving and freight',
    remont: 'Repairs and tradespeople',
    dokumenty: 'Documents and lawyers',
    perevodchiki: 'Translators and notary services',
  },
  entertainment: {
    filtersLegend: 'Entertainment filters',
    typeLabel: 'Type',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Shown: {count}',
    listHeading: 'Where to go out',
    emptyFiltered: 'Nothing yet for the selected type. Reset the filter.',
  },
  catalog: {
    heading: 'What to see in Georgia',
    intro: [
      'A catalog of Georgia’s attractions: nature and mountains, waterfalls and canyons, cave towns, ancient churches and monasteries, fortresses, and thermal resorts. Filter them by type and region below and open a card with the details.',
      'Places make it into the catalog not “from an old blog from memory.” We select them by high ratings across several independent sources and check the details with experienced travelers, guides, and locals. Every article shows the date of its last check.',
    ],
    breadcrumbHome: 'Home',
    mapHeading: 'All places on the map',
    mapAria: 'Interactive map of Georgia’s attractions',
    mapHint: 'The map with all the markers loads on click — to keep the page lightweight.',
    filtersLegend: 'Attraction filters',
    typeLabel: 'Type',
    regionLabel: 'Region',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Places shown: {count}',
    listHeading: 'Attractions',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData: 'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
  },
  uslugi: {
    heading: 'Services in Georgia: for living and relocating',
    breadcrumb: 'Services',
    intro: [
      'Services that those living in Georgia and those relocating need: real estate agents and help with housing, cleaning, freight, repairs, paperwork, translators. Conveniently gathered in one place — by category and city.',
      'We add to this section as requests come in. Paid placements are marked with a gold border; everything else we add once we’ve verified the service.',
    ],
    rubricLabel: 'Category',
    anyOption: 'Any',
    reset: 'Reset filters',
    filtersLegend: 'Service filters',
    resultsCount: 'Services shown: {count}',
    listHeading: 'Services',
    contactLabel: 'Contact',
    siteLabel: 'Website',
    demoLabel: 'Sample',
    emptyFiltered: 'Nothing yet for the selected category. Reset the filter.',
    emptyNoData: 'This section is being filled in: vetted services for living in Georgia will appear here soon.',
    ctaHeading: 'Is your service here?',
    ctaText: 'Real estate agents, cleaning, tradespeople, and other services for those living in Georgia — write to us and we’ll tell you about placement.',
    ctaLabel: 'Ask about placement',
  },
  coordCopy: {
    label: 'Coordinates',
    copy: 'Copy',
    copied: 'Copied',
    copyAria: 'Copy coordinates {coords}',
  },
  hubAffiliate: {
    'arenda-avto': {
      title: 'Car rental in Georgia',
      note: 'Compare rental prices on Trip.com.',
    },
    transport: {
      title: 'Flights to Georgia',
      note: 'Search flights and fares on Trip.com.',
    },
    goroda: {
      title: 'Where to stay',
      note: 'Hotels and apartments across Georgia on Trip.com.',
    },
    razvlecheniya: {
      title: 'Tours & activities',
      note: 'Find tours and activities across Georgia on Trip.com.',
    },
  },
};
