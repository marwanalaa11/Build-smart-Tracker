
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getMaterialInfo = async (query: string, history: ChatMessage[]): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. AI chat features are disabled.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `You are an AI assistant specialized in UAE construction materials. Your name is 'SmartBuild Assistant'. When a user asks about a material, provide a concise but comprehensive overview including:
    1.  **Common Uses:** What is it typically used for in construction projects?
    2.  **Typical Price Range:** Give an estimated price range in UAE Dirhams (AED), specifying the unit (e.g., per ton, per sq. meter).
    3.  **Key Considerations:** Mention important factors like quality standards, common suppliers in the UAE, or installation tips.
    Keep your tone professional, helpful, and direct. Format your response in clean Markdown.`;

    const contents = [
      ...history.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: query }] }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I'm sorry, I couldn't find information on that right now.";

  } catch (error) {
    console.error("Error fetching material info from AI:", error);
    if (error instanceof Error) {
        return `An error occurred while fetching information: ${error.message}.`;
    }
    return "An unknown error occurred while fetching information.";
  }
};
