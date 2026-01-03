import { IngredientCategory } from "./_types";

export const CODING_INGREDIENTS: Record<string, IngredientCategory> = {
  taskType: {
    id: "taskType",
    label: "Task Type",
    type: "single",
    options: {
      generate: {
        id: "generate",
        label: "Code Generation",
        inject: () =>
          "Generate production-ready, maintainable code.",
      },
      debug: {
        id: "debug",
        label: "Debugging",
        inject: () =>
          "Analyze, debug, and fix issues in the provided code.",
      },
      refactor: {
        id: "refactor",
        label: "Refactoring",
        inject: () =>
          "Refactor code to improve structure without changing behavior.",
      },
    },
  },

  testing: {
    id: "testing",
    label: "Testing Strategy",
    type: "single",
    options: {
      none: {
        id: "none",
        label: "No Tests",
        inject: () => "",
      },
      unit: {
        id: "unit",
        label: "Unit Tests",
        inject: () => "Include unit tests for core logic.",
      },
      e2e: {
        id: "e2e",
        label: "E2E Tests",
        tier: "pro",
        inject: () =>
          "Include end-to-end tests simulating real usage.",
      },
    },
  },
};
