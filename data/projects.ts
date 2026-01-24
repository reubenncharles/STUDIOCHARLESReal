// Project data for Studio Charles portfolio

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'saas' | 'property' | 'sports' | 'viral' | 'corporate';
  description: string;
  longDescription?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: string;
  year: number;
  featured: boolean;
  tags: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'aideatr-promo',
    title: 'AI-Powered Revenue Platform',
    client: 'aideatr',
    category: 'saas',
    description: 'A dynamic promo video showcasing aideatr\'s AI-driven platform that transforms airline advertising decisions and converts empty seats into revenue.',
    longDescription: `aideatr is revolutionizing how airlines tackle their biggest revenue challenge: unsold inventory.

Every day, millions of dollars in airline inventory vanishes at takeoff, with the average airline leaving 15% of seats unsold on every flight. Traditional solutions require armies of analysts making manual decisions that take hours, not minutes.

We created a compelling 60-second promo that visualizes the transformation from chaotic spreadsheets and manual processes to aideatr's clean, AI-powered intelligence. The video showcases the platform's ability to identify buyers, serve personalized offers across social media, and deliver predictive analytics with engagement uplifts of at least 15%.

Key visuals include the signature logo reveal with sweeping green arcs, data-to-insight transformations, sleek UI dashboard reveals, and impactful KPI metrics that demonstrate real business value.`,
    videoUrl: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    thumbnailUrl: '/images/projects/aideatr-thumb.jpg',
    duration: '1:00',
    year: 2026,
    featured: true,
    tags: ['SaaS', 'AI', 'Motion Graphics', 'Tech', 'Aviation', 'Explainer'],
    stats: [
      { label: 'Engagement Uplift', value: '15%+' },
      { label: 'Production Time', value: '2 Weeks' },
      { label: 'Deliverables', value: '3 Cuts' }
    ]
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
