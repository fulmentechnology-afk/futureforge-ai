import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method Not Allowed",
    });
  }

  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User: ${message}`,
    });

    return res.status(200).json({
      reply: response.text,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      reply: "AI server error.",
    });
  }
}