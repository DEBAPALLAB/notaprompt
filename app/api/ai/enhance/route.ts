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
  console.log("OpenRouter FULL response:", JSON.stringify(data, null, 2));

  const enhanced =
  data?.choices?.[0]?.message?.content?.trim() ||
  data?.choices?.[0]?.text?.trim();

if (!enhanced) {
  console.error("OpenRouter returned no content:", data);
  return NextResponse.json(
    { error: "No enhancement generated" },
    { status: 500 }
  );
}

  if (!enhanced) {
    return NextResponse.json(
      { error: "Enhancement failed" },
      { status: 500 }
    );
  }
  console.log("OpenRouter raw response:", data);

  return NextResponse.json({ enhanced });
}
