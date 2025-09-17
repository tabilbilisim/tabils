
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getTripSuggestions = async (prompt: string): Promise<string> => {
  const fullPrompt = `Uşak Taksi Hizmetleri, Turkiye. Yolcu ve yolculuk için değerli. Their request is: "${prompt}". Provide a concise, appealing, and helpful response. Suggest a few key places or activities. Format your response clearly, perhaps with headings or bullet points. Your tone should be welcoming and professional.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
      return `Üzgünüz, bir hata oluştu. Lütfen daha sonra tekrar deneyin. Detay: ${error.message}`;
    }
    return "Üzgünüz, bilinmeyen bir hata oluştu.";
  }
};
