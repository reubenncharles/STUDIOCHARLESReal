
export interface ProjectQuote {
  summary: string;
  estimatedTimeline: string;
  suggestedPackage: string;
  nextSteps: string[];
  totalEstimatedCost: number;
  depositAmount: number;
  breakdown: { item: string; cost: number }[];
}

/**
 * Deterministic calculation logic for Studio Charles.
 * Ensures identical inputs always yield the same AUD result.
 */
export const calculateProjectFinancials = (details: {
  projectType: string;
  shootScale: string;
  music: string;
  urgency: string;
  location: string;
}) => {
  // 1. Production (Shoot) Base
  let production = 0;
  if (details.shootScale.includes('Half')) production = 1150;
  else if (details.shootScale.includes('Full')) production = 2200;
  else if (details.shootScale.includes('High-End')) production = 4500;
  else if (details.shootScale.includes('Remote')) production = 0;

  // 2. Post-Production (Editing) Base by Niche
  const typeMap: Record<string, number> = {
    'Real Estate': 950,
    'Sports Doc': 1850,
    'Brand Identity': 2600,
    'TikTok/Viral': 650,
    'Event Aftermovie': 1450
  };
  const post = typeMap[details.projectType] || 1200;

  // 3. Licensing & Assets
  let licensing = 0;
  if (details.music.includes('Stock')) licensing = 150;
  else if (details.music.includes('Custom')) licensing = 650;
  else if (details.music.includes('Commercial')) licensing = 1400;

  // 4. Logistics
  let travel = 0;
  if (!details.location.toLowerCase().includes('cbd')) travel = 120;

  const subtotal = production + post + licensing + travel;

  // 5. Multipliers (Urgency)
  let multiplier = 1.0;
  if (details.urgency.includes('Priority')) multiplier = 1.15;
  else if (details.urgency.includes('Express')) multiplier = 1.35;

  const total = Math.round(subtotal * multiplier);
  const deposit = Math.round(total * 0.1);

  const breakdown = [
    { item: 'Production / Cinematography', cost: production },
    { item: 'Post-Production & Grading', cost: post },
    { item: 'Asset Licensing', cost: licensing },
    { item: 'Travel & Logistics', cost: travel },
    { item: 'Rush Delivery Surcharge', cost: Math.round(subtotal * (multiplier - 1)) }
  ].filter(i => i.cost > 0);

  return { total, deposit, breakdown };
};

const NICHES: Record<string, { package: string; summary: string }> = {
  'Real Estate': {
    package: 'The Property Showcase Elite',
    summary: 'A high-impact property tour designed to drive inquiries and highlight architectural features with premium grading.'
  },
  'Sports Doc': {
    package: 'The Athlete’s Narrative',
    summary: 'A fast-paced, emotive documentary style that captures the intensity and passion of the sport.'
  },
  'Brand Identity': {
    package: 'The Core Identity Series',
    summary: 'A comprehensive brand positioning suite that establishes authority and connects with your target audience.'
  },
  'TikTok/Viral': {
    package: 'The Viral Momentum Pack',
    summary: 'Optimized for high retention and algorithm performance, designed to hook viewers in the first 3 seconds.'
  },
  'Event Aftermovie': {
    package: 'The Event Highlights Cut',
    summary: 'A dynamic recap capturing the energy and key moments, perfect for promoting future events.'
  }
};

export const generateProjectQuote = async (details: {
  name: string;
  projectType: string;
  description: string;
  shootScale: string;
  deliverables: string;
  complexity: string;
  location: string;
  urgency: string;
  music: string;
}): Promise<ProjectQuote> => {
  // First, calculate the deterministic financials
  const financials = calculateProjectFinancials(details);

  const niche = NICHES[details.projectType] || {
    package: 'The Studio Charles Custom',
    summary: 'A tailored video production strategy designed to meet your specific goals with premium quality execution.'
  };

  const narrative = {
    summary: niche.summary,
    estimatedTimeline: details.urgency,
    suggestedPackage: niche.package,
    nextSteps: [
      "Initial Consultation & Briefing",
      "Pre-production & Storyboarding",
      "Production/Filming Phase",
      "Post-production & Delivery"
    ]
  };

  return {
    ...narrative,
    totalEstimatedCost: financials.total,
    depositAmount: financials.deposit,
    breakdown: financials.breakdown
  };
};

export const sendLeadEmail = async (formData: any, quote: ProjectQuote) => {
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
  const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

  const payload = {
    ...formData,
    generatedQuote: quote,
    _subject: `BOOKING DEPOSIT PAID: ${formData.name} - ${formData.projectType}`
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return response.ok;
  } catch (error) {
    console.error("Formspree submission failed", error);
    return false;
  }
};
