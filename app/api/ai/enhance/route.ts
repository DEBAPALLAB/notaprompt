import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();

  if (!input || typeof input !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const prompt = `
Rewrite the following vague user request into a clear,
professional, and unambiguous task description.

Rules:
- Do not add instructions
- Do not add formatting
- Do not mention AI
- Output only the rewritten task

User input:
${input}
`;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://notaprompt.in",
      "X-Title": "NotAPrompt",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3.3-70b-instruct:free", // cheap & good
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
    }),
  });

  const data = await res.json();

  const enhanced = data?.choices?.[0]?.message?.content;

  if (!enhanced) {
    return NextResponse.json(
      { error: "Enhancement failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ enhanced });
}
