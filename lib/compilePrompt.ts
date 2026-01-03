import {
  CompileContext,
  IngredientCategory,
  Mode,
} from "@/config/ingredients";
import { PERSONAS } from "@/config/ingredients";
import { LOGIC_PILLS } from "@/config/ingredients";
import {
  CODING_INGREDIENTS,
  CREATIVE_INGREDIENTS,
  RESEARCH_INGREDIENTS,
} from "@/config/ingredients";

type BuilderType = "coding" | "creative" | "research";

interface CompileArgs {
  builder: BuilderType;
  baseInput: string;
  selections: Record<string, string | string[]>;
  logicPills?: string[];
  persona?: string;
  mode: Mode;
}

const BUILDER_MAP: Record<BuilderType, Record<string, IngredientCategory>> = {
  coding: CODING_INGREDIENTS,
  creative: CREATIVE_INGREDIENTS,
  research: RESEARCH_INGREDIENTS,
};

export function compilePrompt({
  builder,
  baseInput,
  selections,
  logicPills = [],
  persona,
  mode,
}: CompileArgs): string {
  const ctx: CompileContext = {
    selections,
    mode,
    persona,
  };

  const instructions: string[] = [];

  // 1️⃣ Builder-specific ingredients
  const ingredientCategories = BUILDER_MAP[builder];

  Object.entries(selections).forEach(([categoryId, selected]) => {
    const category = ingredientCategories[categoryId];
    if (!category) return;

    const values = Array.isArray(selected) ? selected : [selected];

    values.forEach((valueId) => {
      const option = category.options[valueId];
      if (!option) return;

      if (option.excludeInModes?.includes(mode)) return;

      const injected = option.inject(ctx);
      if (injected) instructions.push(injected);
    });
  });

  // 2️⃣ Logic pills
  logicPills.forEach((pillId) => {
    const pill = LOGIC_PILLS.options[pillId];
    if (!pill) return;

    if (pill.excludeInModes?.includes(mode)) return;

    const injected = pill.inject(ctx);
    if (injected) instructions.push(injected);
  });

  // 3️⃣ Persona injection
  const personaBlock = persona && PERSONAS[persona]
    ? PERSONAS[persona].inject()
    : "";

  // 4️⃣ Mode block
  const modeBlock = getModeBlock(mode);

  // 5️⃣ Final assembly (deterministic)
  return `
${personaBlock}

${modeBlock}

TASK:
${baseInput}

INSTRUCTIONS:
${instructions.map((i) => `- ${i}`).join("\n")}

OUTPUT REQUIREMENTS:
- Be precise
- Avoid filler
- Deliver professional-grade output
`.trim();
}

/* -------------------------------------------------------
   MODE BEHAVIOR
------------------------------------------------------- */

function getModeBlock(mode: Mode): string {
  switch (mode) {
    case "creative":
      return `MODE: Creative\nEncourage exploration and expressive output.`;
    case "aggressive":
      return `MODE: Aggressive\nMaximize depth, rigor, and expert reasoning.`;
    case "safe":
      return `MODE: Safe\nAvoid risky assumptions and be conservative.`;
    case "compliant":
      return `MODE: Compliant\nEnsure output is audit-safe and regulation-aware.`;
    default:
      return "";
  }
}
