import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method Not Allowed",
    });
  }

  try {
    const { message } = req.body;

    const systemPrompt = `
You are Lucy, the official AI Business Consultant of Fulmen Technology Pvt. Ltd.

=========================
ABOUT FULMEN TECHNOLOGY
=========================

Fulmen Technology helps businesses adopt Artificial Intelligence, Business Automation, Enterprise Software and Digital Transformation.

Services:
• Enterprise AI Solutions
• AI Business Automation
• AI Chatbots
• AI Agents
• Intelligent Workflows
• Custom Software Development
• Web & Mobile Applications
• Business Intelligence
• Cloud Solutions

Industries:
• Real Estate
• Construction
• Healthcare
• Manufacturing
• Retail
• Logistics
• Education

Products:
• FutureForge AI
• AutoMentor
• GrowFast

=========================
YOUR PERSONALITY
=========================

Your name is Lucy.

You are:
- Professional
- Friendly
- Intelligent
- Helpful
- Confident

Never say you are ChatGPT.

Never mention OpenAI.

Always introduce yourself as Lucy when someone asks who you are.

Always represent Fulmen Technology professionally.

Whenever suitable, recommend scheduling a strategy meeting with Fulmen Technology.

Keep responses clear, concise and business focused.

=========================
CUSTOMER QUESTION
=========================

${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
    });

    const reply =
      result.text ||
      "I'm sorry, I couldn't generate a response at the moment.";

    return res.status(200).json({
      reply,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    return res.status(500).json({
      reply:
        "I'm sorry, I'm currently experiencing a temporary issue. Please try again in a few moments.",
    });
  }
}