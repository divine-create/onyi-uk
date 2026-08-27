
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLoveLetter = async (mood: string, highlights: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a beautiful, deeply romantic, and poetic love letter for my "Baby Queen" whose name is Onyi. 
      Mood: ${mood}. 
      Specific memories/highlights to include: ${highlights}. 
      The tone should be sincere, high-quality, and evoke strong emotions. Mention her name "Onyi" naturally within the letter.
      Format the output as a clean, multi-paragraph letter.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
        maxOutputTokens: 1000,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating love letter:", error);
    return "My darling Onyi, words escape me in this moment, but my heart beats only for you. Every second spent by your side is a treasure I hold dearer than anything in this world...";
  }
};

export const generateRomanticQuote = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a short, powerful, and unique romantic quote about loving your queen Onyi.",
      config: {
        temperature: 1.0,
        maxOutputTokens: 100,
      }
    });
    return response.text;
  } catch (error) {
    return "Onyi, you are the rhythm of my heart and the peace in my soul.";
  }
};
