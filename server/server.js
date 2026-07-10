import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log("API KEY:", process.env.GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY?.trim();

console.log("API Key Length:", API_KEY.length);
console.log("API Key Starts With:", API_KEY.substring(0, 5));

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("User:", message);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User: ${message}`,
    });

    console.log("Gemini Response:", response);

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.log("========== FULL ERROR ==========");
    console.log(error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    console.log("================================");

    res.status(500).json({
      reply: error.message || "Something went wrong.",
    });
  }
}); // <-- THIS LINE WAS MISSING

app.listen(3001, () => {
  console.log("✅ Gemini server running on http://localhost:3001");
});