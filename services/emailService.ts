
import { GoogleGenAI, Type } from "@google/genai";

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

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Prompt Gemini to write the NARRATIVE based on the FIXED financials
  const prompt = `
    As the Creative Director at Studio Charles, generate the professional narrative for a project quote.
    The math is already finalized; your job is to create a compelling summary and strategic roadmap.

    PROJECT DETAILS:
    - Client: ${details.name}
    - Niche: ${details.projectType}
    - Total Estimate: $${financials.total} AUD
    - Deposit: $${financials.deposit} AUD
    - Vision: ${details.description}
    - Urgency: ${details.urgency}

    REQUIREMENTS:
    1. Create a "Suggested Package Name" that sounds high-end and specific to their niche.
    2. Write a 2-sentence professional summary of the visual approach.
    3. Generate 4 clear "Next Steps" for a strategic roadmap.
    4. Provide a realistic estimated timeline based on ${details.urgency}.

    Format the response strictly as a JSON object.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          estimatedTimeline: { type: Type.STRING },
          suggestedPackage: { type: Type.STRING },
          nextSteps: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          }
        },
        required: ["summary", "estimatedTimeline", "suggestedPackage", "nextSteps"]
      }
    }
  });

  const narrative = JSON.parse(response.text);

  return {
    ...narrative,
    totalEstimatedCost: financials.total,
    depositAmount: financials.deposit,
    breakdown: financials.breakdown
  };
};

export const sendLeadEmail = async (formData: any, quote: ProjectQuote) => {
  const FORMSPREE_ID = 'your_id_here'; 
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
