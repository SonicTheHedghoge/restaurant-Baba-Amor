import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateConciergeResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my connection to the culinary wisdom (API Key) is currently unavailable. Please ask a waiter for assistance!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are "Amor's Spirit", a wise and friendly virtual maître d' for the restaurant "Baba Amor" in Djerba, Tunisia. 
        Your tone is warm, welcoming, and poetic, reflecting the hospitality of Djerba.
        
        Knowledge base:
        - Cuisine: Authentic Djerbian and Tunisian cuisine (Couscous, Brik, Seafood, Mint Tea).
        - Location: Djerba, Tunisia.
        - Services: Reservations, Delivery, Pickup, Outdoor Seating.
        - Vibe: Traditional yet elegant, family-friendly.
        
        If asked about specific dishes, describe them with sensory details (smell, taste, texture).
        Keep answers concise (under 100 words) but charming.
        `,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "Ah, the spirits are quiet today. Please ask me again.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "I am having trouble connecting to the kitchen spirits right now. Please try again later.";
  }
};