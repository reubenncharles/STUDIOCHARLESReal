
import { GoogleGenAI, Type } from "@google/genai";

export interface ScriptSuggestion {
  hooks: string[];
  outline: string[];
}

export const generateVideoIdea = async (topic: string): Promise<ScriptSuggestion> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate 3 viral hooks and a 5-step video outline for a video about: ${topic}. Format the response strictly as a JSON object.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hooks: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3 high-impact hooks for social media videos."
          },
          outline: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A 5-step script or video structure outline."
          }
        },
        required: ["hooks", "outline"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return {
      hooks: ["Error generating hooks", "Please try again later"],
      outline: ["Error generating outline"]
    };
  }
};
