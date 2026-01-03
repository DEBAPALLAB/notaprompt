type EnhanceInput = {
  input: string;
};

export async function enhanceIntent({ input }: EnhanceInput) {
  const res = await fetch("/api/ai/enhance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  const data = await res.json();

  if (!data.enhanced) {
    throw new Error("Enhancement failed");
  }

  return data.enhanced as string;
}
