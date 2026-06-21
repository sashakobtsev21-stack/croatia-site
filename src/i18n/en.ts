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
      placeholder: 'Where are you headed? Dubrovnik, Plitvice, car rental…',
      emptyNoContent: 'Nothing found yet. Try another word — search runs over the articles already published.',
      emptyNoMatch: 'Nothing found. Try a different query.',
      hint: 'Search runs over already published articles, right in your browser.',
    },
    entriesHeading: 'Where to start',
    tiles: {
      dostoprimechatelnosti: 'Nature, churches, fortresses, waterfalls, and canyons of Croatia',
      goroda: 'City guides: what to see, where to eat, how to get around',
      eda: 'What to try and where to eat honestly — without tourist markups',
      razvlecheniya: 'Where to go out: clubs and bars, quizzes, beaches, casinos, and parks',
      marshruty: 'Ready-made road trips: a day-by-day plan, budget, and map',
    },
    showcase: {
      heading: 'Croatia showcase',
      lead: 'The best places, routes and vetted venues — Croatia at a glance.',
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
      text: 'Croatia Guidebook is a travel guide to Croatia: attractions, cities, food, routes, and car rental. We pick places by rating, cross-check the facts, and date-stamp every article — here’s how we work.',
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
    frameTitle: 'Hotel search in Croatia — Trip.com',
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
      'Croatia Guidebook is a guide to all of Croatia, available in English, Russian and Ukrainian. We bring together in one place everything you need for a trip: attractions, cities, food, ready-made routes, car rental, insurance, and news. The goal is simple — to help you plan a trip without outdated advice and tourist traps.',
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
          'Prices, opening hours, and terms in our articles are guidelines as of the check date, not a guarantee. Croatia changes fast, so always verify the details that matter for your trip (the rental price, the deposit, the admission cost) on the other side before you pay.',
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
  "heading": "Travel insurance for Croatia: what you actually need",
  "breadcrumb": "Insurance",
  "intro": [
    "Croatia has been a full member of the European Union since 2013 and joined the Schengen Area on 1 January 2023. That means the rules here follow common EU and Schengen standards rather than any country-specific tourist-insurance scheme. For most visitors, travel insurance is not a legal condition of entry, but it is strongly recommended: a single hospital stay or medical evacuation can cost far more than any policy.",
    "What you need depends on how you enter. Visa-exempt travellers (for example US, UK, Canadian and Australian citizens, and EU nationals) do not have to show insurance at the border, though it is highly advisable. Travellers who need a Schengen visa to visit Croatia must hold travel medical insurance with a minimum of EUR 30,000 in coverage as part of their visa application."
  ],
  "guideLink": "How to choose travel insurance for Croatia",
  "updatedIso": "2026-06-21",
  "callout": {
    "heading": "Is insurance mandatory?",
    "disclaimer": "For visa-exempt tourists, travel insurance is not mandatory to enter Croatia, but it is strongly recommended. For travellers who require a Schengen visa, valid travel medical insurance is mandatory: the EU Visa Code requires a minimum of EUR 30,000 in coverage, valid across the whole Schengen Area for the entire stay, including emergency hospital treatment and repatriation. Rules can change, so always confirm the current requirements with an official source before you travel.",
    "sourceNote": "Based on EU and Croatian government sources, including the EU Visa Code (Regulation 810/2009), the European Commission, and Croatia's Ministry of the Interior (mup.gov.hr)."
  },
  "requirements": {
    "heading": "What a good policy should cover",
    "items": [
      "Emergency medical treatment and hospitalisation, with a coverage limit of at least EUR 30,000 (this is the mandatory minimum for Schengen-visa applicants).",
      "Emergency medical evacuation and repatriation, including repatriation of remains in case of death.",
      "Cover that is valid throughout the entire Schengen Area, not just Croatia.",
      "A policy duration that matches your full stay, so the dates on the certificate cover every day of the trip.",
      "Cover for any activities you plan, such as hiking, diving, sailing or watersports, which are often excluded from basic plans.",
      "Clear terms on the deductible (excess), so you know what you would pay out of pocket on a claim."
    ]
  },
  "penalty": {
    "heading": "Mandatory or just recommended?",
    "paragraphs": [
      "For visa-exempt travellers there is no fine and no automatic refusal of entry simply for arriving without insurance. The real risk is financial: without cover you would pay the full cost of any treatment, ambulance, hospital stay or medical flight home yourself. For this reason, insurance is recommended for everyone, even though it is not checked at the border for most tourists.",
      "For travellers who need a Schengen visa, the situation is different: travel medical insurance meeting the EUR 30,000 minimum is a documented requirement of the visa application itself. Without a compliant policy, the visa can be refused, which in practice prevents the trip."
    ]
  },
  "services": {
    "heading": "Where to get a policy",
    "lead": "The right option depends on your nationality, the length of your stay and whether you also need a Schengen-compliant certificate for a visa. Below are three common routes.",
    "ctaPlaceholder": "Affiliate links are coming soon",
    "items": [
      {
        "name": "SafetyWing",
        "note": "For long-term travellers and digital nomads (EN-friendly)",
        "text": "A subscription-style policy billed monthly, popular with remote workers and long-stay travellers. Convenient for open-ended trips, but check the terms carefully: SafetyWing's plans exclude travel to certain countries, including Russia and Belarus, so they are not suitable if your itinerary includes those destinations."
      },
      {
        "name": "EKTA",
        "note": "For travellers from CIS countries and Ukraine",
        "text": "A useful alternative for travellers from Ukraine and CIS countries, including those whose routes pass through destinations that Western insurers exclude. EKTA issues Schengen-compliant certificates quickly online, which can be helpful when applying for a Croatia/Schengen visa."
      },
      {
        "name": "Standard Schengen travel insurance",
        "note": "For Schengen-visa applicants",
        "text": "A conventional single-trip Schengen travel medical policy from a recognised insurer, written specifically to meet the EUR 30,000 minimum, full-area validity and repatriation requirements. This is the straightforward choice if you mainly need a compliant certificate for your visa file."
      }
    ]
  },
  "affiliate": {
    "title": "Nomad & long-stay insurance",
    "note": "SafetyWing offers monthly, subscription-style cover designed for long trips and digital nomads. Always review the policy wording, coverage limits and excluded countries before you buy to make sure it fits your itinerary and meets any visa requirements.",
    "label": "Get SafetyWing insurance"
  },
  "notes": {
    "heading": "Good to know",
    "items": [
      "EU and EEA citizens can use the European Health Insurance Card (EHIC), and UK residents the Global Health Insurance Card (GHIC), to access state healthcare in Croatia on the same basis as locals. Note that co-payments apply and neither card covers private treatment or repatriation, so private travel insurance is still recommended.",
      "The single emergency number across Croatia and the whole EU is 112, which connects you to ambulance, police and fire services.",
      "Many policies include a waiting period before certain benefits apply, so buy your insurance when you book rather than at the last minute.",
      "Car hire usually needs its own cover: standard travel insurance does not include vehicle damage or third-party liability, so review the rental company's insurance and any excess separately."
    ],
    "rentalLink": "Car rental in Croatia"
  },
  "claims": {
    "heading": "If something happens",
    "items": [
      "In a medical emergency, call 112 first to reach an ambulance and emergency services anywhere in Croatia.",
      "Contact your insurer's assistance line as soon as you can, ideally before treatment, so they can authorise care and arrange direct billing where possible.",
      "Keep every receipt, invoice, prescription and medical report, as you will need them to support a claim or to seek reimbursement.",
      "If you used an EHIC or GHIC and still paid out of pocket, contact your home health authority after returning to request any reimbursement available."
    ]
  },
  "photos": [],
  "sources": {
    "heading": "Sources",
    "items": [
      "EU Visa Code, Regulation (EC) No 810/2009 - travel medical insurance requirement for Schengen visas (eur-lex.europa.eu, home-affairs.ec.europa.eu)",
      "European Commission - European Health Insurance Card (EHIC) use in Croatia (employment-social-affairs.ec.europa.eu)",
      "NHS / NHSBSA - UK Global Health Insurance Card (GHIC) coverage abroad (nhs.uk, nhsbsa.nhs.uk)",
      "Croatia Ministry of the Interior and Ministry of Foreign and European Affairs - entry requirements (mup.gov.hr, mvep.gov.hr)"
    ]
  }
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
  "heading": "Moving to Croatia: a practical guide",
  "breadcrumb": "Relocation",
  "intro": [
    "Croatia has become one of the most attractive EU bases for digital nomads and relocators, and its trump card over neighbouring Balkan countries is hard to overstate: it is a full member of the European Union, it uses the euro, and since 1 January 2023 it is also part of the Schengen Area. That means a single currency, no internal border checks across most of Europe, EU-standard infrastructure and a dedicated residence track for remote workers — the temporary stay for digital nomads. Add a long Adriatic coast, fast internet and a low cost of living by Western-European standards, and the appeal is clear.",
    "This section is a practical guide to settling in on the ground. We start with the non-regulatory things everyone needs first — a SIM and internet, a bank account, housing, getting around, money and community. Documents, visas, residence permits and taxes are regulated by the state and change periodically, so for those we point you straight to the official sources (MUP, the Tax Administration and the Ministry of Foreign and European Affairs) rather than repeating rules that may be out of date by the time you move."
  ],
  "uslugi": {
    "heading": "Services for living in Croatia",
    "text": "Real-estate agents, relocation help, cleaning, moving, repairs, paperwork and translators — a directory of vetted services so you do not have to dig through expat chats to find a reliable contact.",
    "cta": "Open the services directory"
  },
  "updatedIso": "2026-06-21",
  "callout": {
    "heading": "Visas, residence and taxes change — verify with the primary source",
    "disclaimer": "Rules for entry, the digital nomad temporary stay, residence permits, company registration and taxes in Croatia are revised periodically, and the digital-nomad income threshold is re-indexed every year. Do not rely on retellings in chats or older articles — check the terms, amounts and required documents as of the date of your move directly with the Croatian government bodies (links below).",
    "sourceNote": "Primary sources: the Ministry of the Interior (mup.gov.hr) for the digital nomad stay and residence, and the Tax Administration (porezna-uprava.gov.hr) for tax matters — they always carry the current version."
  },
  "guides": {
    "heading": "In-depth guides",
    "lead": "Detailed, non-regulatory how-tos for settling into life in Croatia — updated as things change."
  },
  "steps": {
    "heading": "Settling in",
    "items": [
      {
        "title": "SIM card & internet",
        "text": "Croatia has three mobile operators — A1 Croatia, Hrvatski Telekom (HT) and Telemach — all with 5G and good coverage. Prepaid and tourist SIMs are sold at operators' shops, Tisak kiosks and the major airports; as an EU country, Croatia also gives you EU roaming on the right plans. Fixed and mobile internet are fast and affordable, which makes the country a comfortable base for remote work."
      },
      {
        "title": "Bank account",
        "text": "A local account is opened in person by the major banks — Zagrebačka banka, Privredna banka Zagreb (PBZ), Erste Bank and OTP banka. As a foreigner you will generally need an OIB (the Croatian personal identification number, issued by the Tax Administration), your passport and proof of address; non-residents are usually asked to show an economic link to Croatia. Accounts are held in euros. Confirm the exact document set with the branch in advance, as requirements are tightened from time to time."
      },
      {
        "title": "Housing & rental",
        "text": "For the first weeks it is convenient to stay in a hotel or apartment and look for a long-term rental on the ground, after seeing the neighbourhood in person. Leases typically run 6–12 months with a deposit, often one month's rent. Prices depend heavily on city and season — the coast and Zagreb are pricier, and Adriatic towns get more expensive in summer. Check the meters, the internet speed and who pays the utilities before signing."
      },
      {
        "title": "Getting around",
        "text": "Cities have cheap public transport — in Zagreb the ZET network of trams and buses covers the centre well, and trams make a car unnecessary day to day. Between cities there are frequent buses, some trains, and ferries along the coast and to the islands. For more freedom many rent a car; how that works is covered in our car-rental section."
      },
      {
        "title": "Money (euro)",
        "text": "Croatia adopted the euro on 1 January 2023, so there is no separate local currency to convert — prices, salaries and rents are all in euros. Cards are accepted almost everywhere in cities and tourist areas, though it is worth keeping some cash for small shops, markets and rural areas. Being inside the eurozone also means no currency conversion when moving money from other euro accounts."
      },
      {
        "title": "Language & community",
        "text": "The language is Croatian, but English is widely spoken in cities, tourist areas and among younger people, so it is easy to get by while you learn the basics. Zagreb, Split and the coastal towns have sizeable expat and digital-nomad communities, with active meetups and online groups — Croatia even runs nomad-focused events, which makes settling in and finding contacts straightforward."
      }
    ]
  },
  "affiliate": {
    "title": "Where to stay at first",
    "note": "Hotels and apartments for your first weeks in Croatia, before you sign a long-term lease — compare prices on Trip.com.",
    "label": "Find a place on Trip.com"
  },
  "esim": {
    "title": "Mobile internet from day one",
    "note": "Stay online from the moment you land, before you buy a local A1, HT or Telemach SIM — an Airalo eSIM activates online in minutes.",
    "label": "Buy an eSIM for Croatia"
  },
  "links": {
    "heading": "Related sections",
    "lead": "Practical sections of the site that come in handy when relocating to Croatia:",
    "items": [
      {
        "section": "goroda",
        "text": "Croatia's cities — where to live and what each is like"
      },
      {
        "section": "strahovka",
        "text": "long-stay and travel medical insurance with coverage abroad"
      },
      {
        "section": "arenda-avto",
        "text": "car rental: how, where and without overpaying"
      },
      {
        "section": "transport",
        "text": "how to get to Croatia and travel between cities"
      }
    ]
  },
  "regulatory": {
    "heading": "Official sources",
    "lead": "For documents, the digital nomad stay and taxes we point you straight to the Croatian government sites — they hold the current rules, deadlines and amounts. The income threshold and conditions are re-indexed periodically, so always confirm the figures there as of the date you apply.",
    "items": [
      {
        "topic": "Digital nomad temporary stay and residence",
        "org": "Ministry of the Interior (MUP)",
        "url": "https://mup.gov.hr"
      },
      {
        "topic": "Taxes and income-tax treatment of nomads",
        "org": "Tax Administration (Porezna uprava)",
        "url": "https://porezna-uprava.gov.hr"
      },
      {
        "topic": "Entry, visas and visa-free travel",
        "org": "Ministry of Foreign and European Affairs (MVEP)",
        "url": "https://mvep.gov.hr"
      },
      {
        "topic": "Company registration and government services",
        "org": "Government of Croatia (gov.hr / START)",
        "url": "https://gov.hr"
      }
    ],
    "linkLabel": "Open official source"
  },
  "notes": {
    "heading": "Good to know",
    "items": [
      "Croatia is in the EU, uses the euro (since 1 January 2023) and is in the Schengen Area — its key advantage over non-Schengen Balkan neighbours.",
      "For tourist or scouting trips, citizens of the US, UK, Canada and Australia get 90 days of visa-free stay in any 180-day period under the Schengen rule; Ukrainians with a biometric passport also use the 90/180 visa-free regime, while Russian citizens need a Schengen visa.",
      "The digital nomad temporary stay is granted for up to 18 months, requires remote work for a foreign employer or clients, and a new application can be submitted only 6 months after the previous stay expires; time spent as a nomad does not count toward permanent residence.",
      "Croatia confirms a minimum income of about €3,622.50 per month (set at 2.5× the prior-year average net salary and re-indexed annually) plus health insurance — verify the exact current figure on mup.gov.hr before you apply.",
      "Income earned as a registered digital nomad from a non-Croatian employer or clients is exempt from Croatian personal income tax (Personal Income Tax Act); watch the 183-day tax-residence line and confirm details with the Tax Administration."
    ]
  },
  "sources": {
    "heading": "Sources",
    "items": [
      "Ministry of the Interior of Croatia (MUP) — temporary stay of digital nomads, residence: mup.gov.hr",
      "Tax Administration of Croatia (Porezna uprava) — income tax, treatment of nomad income: porezna-uprava.gov.hr",
      "Ministry of Foreign and European Affairs (MVEP) — entry, visa requirements: mvep.gov.hr",
      "Government of Croatia (gov.hr / START) — company registration and public services: gov.hr",
      "European Commission, Migration and Home Affairs — Schengen Area and short-stay rules: home-affairs.ec.europa.eu"
    ]
  }
},
  eda: {
    heading: 'Where to eat in Croatia',
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
    heading: 'What to see in Croatia',
    intro: [
      'A catalog of Croatia’s attractions: nature and mountains, waterfalls and canyons, cave towns, ancient churches and monasteries, fortresses, and thermal resorts. Filter them by type and region below and open a card with the details.',
      'Places make it into the catalog not “from an old blog from memory.” We select them by high ratings across several independent sources and check the details with experienced travelers, guides, and locals. Every article shows the date of its last check.',
    ],
    breadcrumbHome: 'Home',
    mapHeading: 'All places on the map',
    mapAria: 'Interactive map of Croatia’s attractions',
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
    heading: 'Services in Croatia: for living and relocating',
    breadcrumb: 'Services',
    intro: [
      'Services that those living in Croatia and those relocating need: real estate agents and help with housing, cleaning, freight, repairs, paperwork, translators. Conveniently gathered in one place — by category and city.',
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
    emptyNoData: 'This section is being filled in: vetted services for living in Croatia will appear here soon.',
    ctaHeading: 'Is your service here?',
    ctaText: 'Real estate agents, cleaning, tradespeople, and other services for those living in Croatia — write to us and we’ll tell you about placement.',
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
      title: 'Car rental in Croatia',
      note: 'Compare rental prices on Trip.com.',
    },
    transport: {
      title: 'Flights to Croatia',
      note: 'Search flights and fares on Trip.com.',
    },
    goroda: {
      title: 'Where to stay',
      note: 'Hotels and apartments across Croatia on Trip.com.',
    },
    razvlecheniya: {
      title: 'Tours & activities',
      note: 'Find tours and activities across Croatia on Trip.com.',
    },
  },
};
