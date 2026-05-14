import { NextRequest, NextResponse } from "next/server";
import { generateContent } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { type, payload } = await req.json();

    let prompt = "";

    if (type === "what-can-i-cook") {
      prompt = `You are a professional chef assistant. The user has these ingredients: ${payload.ingredients}.
      Generate a complete recipe they can make. Format your response as JSON with these fields:
      { "title": "", "description": "", "prepTime": number, "cookTime": number, "servings": number, 
        "difficulty": "Easy|Medium|Hard", "ingredients": [], "instructions": [], "tips": "" }
      Return only valid JSON, no markdown, no extra text.`;
    }

    if (type === "meal-planner") {
      prompt = `You are a nutrition-focused meal planning assistant. 
      User preferences: Diet: ${payload.diet}, Goal: ${payload.goal}, Allergies: ${payload.allergies || "none"}.
      Generate a 7-day meal plan. Format as JSON:
      { "week": [ { "day": "Monday", "breakfast": {"name":"","calories":0}, "lunch": {"name":"","calories":0}, "dinner": {"name":"","calories":0} } ... for all 7 days ] }
      Return only valid JSON, no markdown, no extra text.`;
    }

    if (!prompt) {
      return NextResponse.json(
        { error: "Invalid AI feature type" },
        { status: 400 },
      );
    }

    const result = await generateContent(prompt);

    // Clean response in case Gemini adds markdown
    const cleaned = result.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({ success: true, data: parsed });
  } catch (err) {
    console.error("AI error:", err);
    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 },
    );
  }
}
