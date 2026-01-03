import { Mode } from "./_types";

export const MODES: Record<Mode, { label: string; description: string }> = {
  creative: {
    label: "Creative",
    description: "Exploratory, expressive, flexible output",
  },
  aggressive: {
    label: "Aggressive",
    description: "Maximum depth, reasoning, and rigor",
  },
  safe: {
    label: "Safe",
    description: "Conservative, minimal assumptions, user-protective",
  },
  compliant: {
    label: "Compliant",
    description: "Audit-safe, regulation-aware, deterministic output",
  },
};
