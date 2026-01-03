import { IngredientCategory } from "./_types";

export const LOGIC_PILLS: IngredientCategory = {
  id: "logicPills",
  label: "Logic Pills",
  type: "multi",

  options: {
    edgeCases: {
      id: "edgeCases",
      label: "Edge Case Analysis",
      tier: "pro",
      inject: () =>
        "Explicitly identify edge cases and failure scenarios.",
    },

    validation: {
      id: "validation",
      label: "Input Validation",
      inject: () =>
        "Validate all inputs and handle invalid states safely.",
    },

    stepByStep: {
      id: "stepByStep",
      label: "Step-by-Step Reasoning",
      tier: "pro",
      inject: ({ mode }) =>
        mode === "aggressive"
          ? "Reason step-by-step internally before answering."
          : "",
      excludeInModes: ["safe", "compliant"],
    },

    complianceGuard: {
      id: "complianceGuard",
      label: "Compliance Guard",
      tier: "enterprise",
      inject: () =>
        "Ensure the output complies with relevant regulations and standards.",
    },
  },
};
const AVAILABLE_LOGIC_PILLS = [
  {
    id: "edgeCases",
    label: "Edge Case Analysis",
  },
  {
    id: "validation",
    label: "Input Validation",
  },
  {
    id: "stepByStep",
    label: "Step-by-Step Reasoning",
  },
];
