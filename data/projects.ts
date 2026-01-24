// Project data for Studio Charles portfolio

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'saas' | 'property' | 'sports' | 'viral' | 'corporate';
  description: string;
  longDescription?: string;
  videoUrl: string;
  videoType?: 'youtube' | 'gdrive' | 'vimeo';
  thumbnailUrl?: string;
  duration: string;
  year: number;
  featured: boolean;
  tags: string[];
  accentColor?: 'amber' | 'blue' | 'emerald' | 'purple' | 'red';
  stats?: {
    label: string;
    value: string;
  }[];
  challenge?: string;
  approach?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'yellow-property',
    title: 'Cinematic Walking Tour',
    client: 'Yellow Property Management',
    category: 'property',
    description: 'A cinematic walking tour engineered for brand authority. Moving beyond 15-second hooks into long-form property storytelling.',
    longDescription: `Yellow Property Management needed content that would establish them as the premium choice for property management in Sydney's competitive market.

We crafted a cinematic walking tour that showcases their portfolio with the kind of production value typically reserved for luxury real estate listings. Every frame was carefully color graded in DaVinci Resolve to achieve a consistent, premium aesthetic.`,
    videoUrl: 'https://drive.google.com/file/d/1PQOB3FlKpyYnI9XE0vMV7kNdz6TGLOVA/preview',
    videoType: 'gdrive',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1PQOB3FlKpyYnI9XE0vMV7kNdz6TGLOVA&sz=w1280',
    duration: '2:30',
    year: 2025,
    featured: true,
    tags: ['Property', 'Real Estate', 'Walking Tour', 'DaVinci Resolve', 'Sydney'],
    accentColor: 'amber',
    stats: [
      { label: 'Properties Featured', value: '5' },
      { label: 'Color Grade', value: 'DaVinci' },
      { label: 'Format', value: '4K' }
    ],
    challenge: 'Yellow Property needed to differentiate themselves in Sydney\'s saturated property management market. Standard listing videos weren\'t cutting through the noise.',
    approach: 'We created a cinematic walking tour with premium color grading and smooth camera movements that elevate their brand perception and showcase properties with the production value they deserve.'
  },
  {
    id: 'burwood-fc',
    title: 'Grand Final Documentary',
    client: 'Burwood Football Club',
    category: 'sports',
    description: 'Elite-level sports cinematography designed to capture the intensity of the game. A masterclass in pacing and sound design tailored for the modern sports consumer.',
    longDescription: `Translating the raw kinetic energy of the pitch into a high-octane narrative.

The U14 Division 2 Grand Final was more than just a game - it was the culmination of a season's worth of dedication. We captured every crucial moment with dynamic camera work and crafted an edit that matches the intensity the players brought to the field.`,
    videoUrl: 'https://drive.google.com/file/d/1bdp7KcNNI-z4ghgUUymsj9Y-RLCNtcUW/preview',
    videoType: 'gdrive',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1bdp7KcNNI-z4ghgUUymsj9Y-RLCNtcUW&sz=w1280',
    duration: '3:45',
    year: 2025,
    featured: true,
    tags: ['Sports', 'Documentary', 'Football', 'NPL', 'High-Velocity'],
    accentColor: 'blue',
    stats: [
      { label: 'Event', value: 'Grand Final' },
      { label: 'Edit Style', value: 'High-Velocity' },
      { label: 'Division', value: 'U14 Div 2' }
    ],
    challenge: 'Burwood FC wanted to capture their historic grand final win in a way that would energize their community and attract new players to the club.',
    approach: 'We delivered high-velocity sports cinematography with dynamic pacing and impactful sound design that translates the raw energy of the pitch into compelling digital content.'
  },
  {
    id: 'aideatr-promo',
    title: 'AI-Powered Revenue Platform',
    client: 'aideatr',
    category: 'saas',
    description: 'A dynamic promo video showcasing aideatr\'s AI-driven platform that transforms airline advertising decisions and converts empty seats into revenue.',
    longDescription: `aideatr is revolutionizing how airlines tackle their biggest revenue challenge: unsold inventory.

Every day, millions of dollars in airline inventory vanishes at takeoff, with the average airline leaving 15% of seats unsold on every flight. Traditional solutions require armies of analysts making manual decisions that take hours, not minutes.

We created a compelling 60-second promo that visualizes the transformation from chaotic spreadsheets and manual processes to aideatr's clean, AI-powered intelligence.`,
    videoUrl: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    videoType: 'youtube',
    duration: '1:00',
    year: 2026,
    featured: true,
    tags: ['SaaS', 'AI', 'Motion Graphics', 'Tech', 'Aviation', 'Explainer'],
    accentColor: 'emerald',
    stats: [
      { label: 'Engagement Uplift', value: '15%+' },
      { label: 'Production Time', value: '2 Weeks' },
      { label: 'Deliverables', value: '3 Cuts' }
    ],
    challenge: 'Airlines lose millions daily to unsold inventory. With 15% of seats going unsold on average, aideatr needed a video that would clearly communicate how their AI platform transforms chaotic manual processes into intelligent, automated revenue recovery.',
    approach: 'We crafted a 60-second journey from problem to solution, using dynamic data visualizations, sleek UI reveals, and compelling metrics. The signature green color palette and AI network animations reinforce aideatr\'s cutting-edge technology positioning.'
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
