import { IngredientCategory } from "./_types";

export const RESEARCH_INGREDIENTS: Record<string, IngredientCategory> = {
  researchType: {
    id: "researchType",
    label: "Research Type",
    type: "single",
    options: {
      literature: {
        id: "literature",
        label: "Literature Review",
        inject: () =>
          "Conduct a structured literature review on the topic.",
      },
      analysis: {
        id: "analysis",
        label: "Analytical Research",
        inject: () =>
          "Provide a deep analytical breakdown supported by logical reasoning.",
      },
      comparative: {
        id: "comparative",
        label: "Comparative Study",
        inject: () =>
          "Compare multiple approaches, theories, or perspectives objectively.",
      },
    },
  },

  depth: {
    id: "depth",
    label: "Depth",
    type: "single",
    options: {
      overview: {
        id: "overview",
        label: "Overview",
        inject: () =>
          "Provide a concise high-level overview.",
      },
      detailed: {
        id: "detailed",
        label: "Detailed",
        inject: () =>
          "Provide a detailed, structured explanation with clear sections.",
        tier: "pro",
      },
      exhaustive: {
        id: "exhaustive",
        label: "Exhaustive",
        tier: "enterprise",
        inject: () =>
          "Provide an exhaustive, publication-grade analysis.",
      },
    },
  },

  methodology: {
    id: "methodology",
    label: "Methodology",
    type: "single",
    options: {
      qualitative: {
        id: "qualitative",
        label: "Qualitative",
        inject: () =>
          "Use qualitative reasoning and conceptual analysis.",
      },
      quantitative: {
        id: "quantitative",
        label: "Quantitative",
        tier: "pro",
        inject: () =>
          "Use quantitative reasoning and, where appropriate, data-backed analysis.",
      },
    },
  },

  citation: {
    id: "citation",
    label: "Citation Style",
    type: "single",
    options: {
      none: {
        id: "none",
        label: "No Citations",
        inject: () => "",
      },
      apa: {
        id: "apa",
        label: "APA",
        inject: () =>
          "Use APA citation style where references are mentioned.",
      },
      mla: {
        id: "mla",
        label: "MLA",
        inject: () =>
          "Use MLA citation style where references are mentioned.",
      },
      chicago: {
        id: "chicago",
        label: "Chicago",
        tier: "pro",
        inject: () =>
          "Use Chicago citation style with proper attribution.",
      },
    },
  },

  biasControl: {
    id: "biasControl",
    label: "Bias Control",
    type: "single",
    options: {
      neutral: {
        id: "neutral",
        label: "Neutral",
        inject: () =>
          "Maintain a neutral, objective tone and avoid speculation.",
      },
      critical: {
        id: "critical",
        label: "Critical",
        inject: () =>
          "Critically evaluate claims and identify weaknesses.",
        tier: "pro",
      },
    },
  },
};
