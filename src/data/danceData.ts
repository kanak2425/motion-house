export interface DanceStyle {
  id: string;
  name: string;
  tagline: string;
  level: string;
  description: string;
  curriculum: string[];
  bpm: string;
  image: string;
  accentColor: string;
}

export interface ClassScheduleItem {
  id: string;
  danceStyle: string;
  days: string[];
  dayDisplay: string;
  time: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  studio: string;
  instructor: string;
  capacity: number;
  enrolled: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  badge?: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  signatureStyle: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Choreography' | 'Practice' | 'Battles' | 'Studio Space';
  image: string;
  description: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  style: string;
  duration: string;
  quote: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: 'hiphop',
    name: 'Hip-Hop',
    tagline: 'Grooves, isolations & rhythmic precision',
    level: 'Beginner to Advanced',
    description:
      'Master foundational grooves, bounce, poppin’ textures, and fast-paced commercial choreography straight from urban street culture.',
    curriculum: ['Foundational bounce & rocking', 'Body isolations & textures', 'Musicality & micro-timing', 'Performance stage presence'],
    bpm: '85 – 105 BPM',
    image: '/src/assets/images/dance_hiphop_1792512583386.jpg',
    accentColor: '#26160F',
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    tagline: 'Fluidity, gravity & raw emotional storytelling',
    level: 'Beginner to Advanced',
    description:
      'Blend balletic alignment with floorwork, breath release, and dynamic weight shifts to express personal stories through uncaged movement.',
    curriculum: ['Floor transitions & rolls', 'Weight transfers & suspension', 'Spinal articulation', 'Improvisation & narrative flow'],
    bpm: '65 – 95 BPM',
    image: '/src/assets/images/dance_contemporary_1792512584916.jpg',
    accentColor: '#4A2E20',
  },
  {
    id: 'bollywood',
    name: 'Bollywood Fusion',
    tagline: 'High-octane expression & cinematic beats',
    level: 'All levels',
    description:
      'Explosive energy merging classical Indian folk (Bhangra, Garba, Kathak mudras) with crisp modern street-style choreography.',
    curriculum: ['Facial expressions (Abhinaya)', 'Dynamic footwork & spins', 'Lyrical sync & storytelling', 'High-energy cardio stamina'],
    bpm: '100 – 128 BPM',
    image: '/src/assets/images/dance_bollywood_1792512584904.jpg',
    accentColor: '#8C5535',
  },
  {
    id: 'jazzfunk',
    name: 'Jazz Funk',
    tagline: 'Fierce lines, commercial sass & music-video flair',
    level: 'Intermediate',
    description:
      'The signature style of world tours and music videos. Sharp hits, lyrical extensions, pirouettes, and unapologetic attitude.',
    curriculum: ['Clean diagonal lines & turns', 'Fast syncopated arm hits', 'Floor accents & poses', 'Camera-angle performance'],
    bpm: '110 – 125 BPM',
    image: '/src/assets/images/hero_dance_studio_1792512583638.jpg',
    accentColor: '#362016',
  },
  {
    id: 'freestyle',
    name: 'Freestyle & Cyphers',
    tagline: 'Spontaneous flow, battle tactics & self-expression',
    level: 'All levels',
    description:
      'Break free from choreography. Learn to listen deeply to the bassline, respond to the crowd, and build your own movement vocabulary.',
    curriculum: ['Listening to instrumental layers', 'The art of the cypher circle', 'Call-and-response dynamics', 'Mental freedom in dance'],
    bpm: '80 – 120 BPM',
    image: '/src/assets/images/studio_battle_cypher_1792512604823.jpg',
    accentColor: '#26160F',
  },
  {
    id: 'fitness',
    name: 'Dance Fitness',
    tagline: 'High-cardio conditioning masked as pure celebration',
    level: 'All levels',
    description:
      'Torch calories and build core agility with non-stop rhythmic movement set to international afrobeat, funk, and electronic beats.',
    curriculum: ['Core stability & balance', 'Cardio endurance bursts', 'Active dynamic stretching', 'Full-body tone & rhythm'],
    bpm: '120 – 135 BPM',
    image: '/src/assets/images/dance_hiphop_1792512583386.jpg',
    accentColor: '#6B3F27',
  },
];

export const INITIAL_SCHEDULE: ClassScheduleItem[] = [
  {
    id: 'c1',
    danceStyle: 'Kids Dance',
    days: ['Mon', 'Wed', 'Fri'],
    dayDisplay: 'Mon, Wed, Fri',
    time: '4:00–5:00 PM',
    level: 'Beginner',
    studio: 'Studio A (Timber Hall)',
    instructor: 'Dev Kapoor',
    capacity: 18,
    enrolled: 14,
  },
  {
    id: 'c2',
    danceStyle: 'Bollywood',
    days: ['Mon', 'Wed', 'Fri'],
    dayDisplay: 'Mon, Wed, Fri',
    time: '5:00–6:00 PM',
    level: 'All levels',
    studio: 'Studio B (Loft)',
    instructor: 'Dev Kapoor',
    capacity: 25,
    enrolled: 22,
  },
  {
    id: 'c3',
    danceStyle: 'Hip-Hop',
    days: ['Tue', 'Thu', 'Sat'],
    dayDisplay: 'Tue, Thu, Sat',
    time: '5:30–6:30 PM',
    level: 'Beginner',
    studio: 'Studio A (Timber Hall)',
    instructor: 'Marcus Vance',
    capacity: 22,
    enrolled: 19,
  },
  {
    id: 'c4',
    danceStyle: 'Contemporary',
    days: ['Tue', 'Thu', 'Sat'],
    dayDisplay: 'Tue, Thu, Sat',
    time: '6:30–7:30 PM',
    level: 'Intermediate',
    studio: 'Studio C (The Cypher)',
    instructor: 'Ananya Sharma',
    capacity: 18,
    enrolled: 15,
  },
  {
    id: 'c5',
    danceStyle: 'Freestyle',
    days: ['Mon', 'Wed', 'Fri'],
    dayDisplay: 'Mon, Wed, Fri',
    time: '7:00–8:00 PM',
    level: 'All levels',
    studio: 'Studio C (The Cypher)',
    instructor: 'Marcus Vance & Guests',
    capacity: 25,
    enrolled: 24,
  },
  {
    id: 'c6',
    danceStyle: 'Advanced Training',
    days: ['Tue', 'Thu', 'Sat'],
    dayDisplay: 'Tue, Thu, Sat',
    time: '7:30–8:30 PM',
    level: 'Advanced',
    studio: 'Studio A (Timber Hall)',
    instructor: 'Guest Master Choreographers',
    capacity: 16,
    enrolled: 14,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'drop-in',
    name: 'DROP-IN CLASS',
    price: '₹399',
    period: 'per class',
    features: [
      'One complete 60-minute dance session',
      'Suitable for trying any dance style',
      'No long-term commitment or registration fees',
      'Studio locker & hydration bar access',
      'Valid for 14 days from purchase',
    ],
    cta: 'BOOK A CLASS',
  },
  {
    id: 'monthly',
    name: 'MONTHLY MEMBERSHIP',
    price: '₹2,499',
    period: 'per month',
    isPopular: true,
    badge: 'MOST POPULAR',
    features: [
      'Up to 3 classes per week (12 classes/mo)',
      'Access to selected beginner & intermediate classes',
      'Choreography breakdown video archives',
      'Progress tracking & 1-on-1 monthly faculty review',
      'Invitation to monthly community dance jams',
      '10% discount on guest choreographer workshops',
    ],
    cta: 'JOIN MOTION HOUSE',
  },
  {
    id: 'unlimited',
    name: 'UNLIMITED MEMBERSHIP',
    price: '₹3,999',
    period: 'per month',
    features: [
      'Unlimited eligible group classes across all styles',
      'Priority registration for international masterclasses',
      'Member-only closed cypher & rehearsal studio hours',
      'Full video review & professional stage showcase audition',
      'Guest pass privilege (1 free friend drop-in/mo)',
      'Dedicated locker & complimentary studio merch pack',
    ],
    cta: 'GO UNLIMITED',
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Head of Urban & Hip-Hop',
    specialty: 'Hip-Hop, Krump & Isolations',
    experience: '11+ Years International',
    bio: 'Trained between Los Angeles and London underground dance circuits. Marcus has choreographed commercial tours, global brand campaigns, and coached national crew champions.',
    image: '/src/assets/images/instructor_marcus_1792512584445.jpg',
    signatureStyle: 'Heavy bass pocket, explosive floor glides & micro-isolations',
    quote: 'Dance is not about keeping up with the tempo; it is about making the tempo live inside your bones.',
  },
  {
    id: 'ananya',
    name: 'Ananya Sharma',
    role: 'Artistic Director — Contemporary',
    specialty: 'Contemporary, Floorwork & Release',
    experience: '9+ Years Performing Arts',
    bio: 'Former principal soloist with the National Dance Collective and Juilliard summer fellowship alum. Ananya teaches dancers how to harness breath, gravity, and vulnerable storytelling.',
    image: '/src/assets/images/instructor_ananya_1792512603231.jpg',
    signatureStyle: 'Effortless floor transitions, expansive aerial extensions & breath sync',
    quote: 'When your body stops resisting gravity, your true movement language begins.',
  },
  {
    id: 'dev',
    name: 'Dev Kapoor',
    role: 'Lead Choreographer — Bollywood & Commercial',
    specialty: 'Bollywood Fusion, Bhangra & Urban Funk',
    experience: '8+ Years Stage & Screen',
    bio: 'With over 40 million views on commercial choreography projects, Dev transforms theatrical Indian dance traditions into electrifying, modern studio anthems.',
    image: '/src/assets/images/instructor_dev_1792512603573.jpg',
    signatureStyle: 'High-energy rhythmic footwork, expressive mudras & infectious joy',
    quote: 'If you can smile, you can bounce. Bollywood is pure celebration of the heart.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Synchronized Crew Choreography',
    category: 'Choreography',
    image: '/src/assets/images/hero_dance_studio_1792512583638.jpg',
    description: 'Advanced cohort perfecting precision timing for the upcoming annual showcase.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'g2',
    title: 'The Cypher Underground',
    category: 'Battles',
    image: '/src/assets/images/studio_battle_cypher_1792512604823.jpg',
    description: 'Friday night open cyphers where students test freestyle improvisation in the circle.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'g3',
    title: 'Contemporary Weight & Release',
    category: 'Practice',
    image: '/src/assets/images/dance_contemporary_1792512584916.jpg',
    description: 'Exploring floor-to-air elevation and momentum in our naturally lit Studio C.',
    span: 'col-span-1',
  },
  {
    id: 'g4',
    title: 'Urban Hip-Hop Pocket Practice',
    category: 'Choreography',
    image: '/src/assets/images/dance_hiphop_1792512583386.jpg',
    description: 'Isolating bass kick dynamics in our timber-floor acoustic studio.',
    span: 'col-span-1',
  },
  {
    id: 'g5',
    title: 'Bollywood Fusion Energy',
    category: 'Practice',
    image: '/src/assets/images/dance_bollywood_1792512584904.jpg',
    description: 'Celebratory rhythms blending folk footwork with modern commercial punch.',
    span: 'col-span-1 md:col-span-2',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Mehta',
    style: 'Beginner Hip-Hop',
    duration: '6 Months at Motion House',
    quote:
      'I walked in terrified with zero dance experience and two left feet. Within 3 weeks, Marcus made me feel completely at home. The vibe is zero judgment, pure support.',
    role: 'Software Architect',
  },
  {
    id: 't2',
    name: 'Pooja Sundaram',
    style: 'Contemporary & Release',
    duration: '1 Year at Motion House',
    quote:
      'The sprung hardwood floors make an incredible difference on your joints, and Ananya teaches technique with such profound emotional depth. This studio changed my relationship with my body.',
    role: 'Creative Director',
  },
  {
    id: 't3',
    name: 'Karan Virk',
    style: 'Bollywood Fusion & Freestyle',
    duration: '8 Months at Motion House',
    quote:
      'Hands down the most electrifying studio in the city. The energy during Friday cyphers is unmatched. You come for a workout, you leave with a family.',
    role: 'Product Designer',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "I have never danced before in my life. Can I still attend?",
    answer:
      "Absolutely. Over 60% of our members started as complete beginners. Our Beginner classes break down counts, weight transfers, and musicality from step one. You will never be thrown into deep water without guidance.",
  },
  {
    question: "What should I wear to my first class?",
    answer:
      "Comfortable streetwear or athletic wear that gives you full range of motion. For Hip-Hop and Bollywood, bring clean flat-sole indoor sneakers. For Contemporary, dancers train barefoot or in clean grip socks.",
  },
  {
    question: "How does the trial class pass work?",
    answer:
      "Your trial class allows you to test any scheduled beginner or all-levels session. You get personal feedback from the instructor at the end, a tour of the studio, and zero pressure to sign a long-term plan.",
  },
  {
    question: "Can I pause or reschedule my membership if I travel?",
    answer:
      "Yes. Both Monthly and Unlimited Memberships can be frozen for up to 14 days per quarter with 48 hours notice. Drop-in passes remain valid for 14 days from booking.",
  },
  {
    question: "Where is Motion House located and is there parking?",
    answer:
      "We are on Level 2 of The Warehouse District, 42 Rhythm Boulevard. Dedicated basement parking is available for two-wheelers and four-wheelers, and we are an 8-minute walk from the central Metro station.",
  },
];
