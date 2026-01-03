"use client";

import { compilePrompt } from "@/lib/compilePrompt";

export default function TestCompilerPage() {
  const prompt = compilePrompt({
    builder: "coding",
    baseInput: "Build a JWT authentication system",
    selections: {
      taskType: "generate",
      language: "typescript",
      framework: "nextjs",
      testing: "unit",
    },
    logicPills: ["edgeCases", "validation"],
    persona: "seniorBackend",
    mode: "aggressive",
  });

  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      <h1 className="text-xl mb-4">Compiled Prompt</h1>
      <pre className="whitespace-pre-wrap bg-white/5 p-4 rounded">
        {prompt}
      </pre>
    </div>
  );
}
