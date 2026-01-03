import { IngredientCategory } from "./_types";

export const CREATIVE_INGREDIENTS: Record<string, IngredientCategory> = {
  contentType: {
    id: "contentType",
    label: "Content Type",
    type: "single",
    options: {
      image: {
        id: "image",
        label: "Image Generation",
        inject: () =>
          "Generate a high-quality image based on the following description.",
      },
      video: {
        id: "video",
        label: "Video Generation",
        tier: "pro",
        inject: () =>
          "Generate a cinematic video concept with clear scene progression.",
      },
    },
  },

  style: {
    id: "style",
    label: "Visual Style",
    type: "single",
    options: {
      realistic: {
        id: "realistic",
        label: "Realistic",
        inject: () =>
          "Use a realistic, photorealistic visual style.",
      },
      cinematic: {
        id: "cinematic",
        label: "Cinematic",
        inject: () =>
          "Apply cinematic composition, dramatic lighting, and film-like framing.",
        tier: "pro",
      },
      anime: {
        id: "anime",
        label: "Anime",
        inject: () =>
          "Use anime-style illustration with expressive features.",
      },
      minimal: {
        id: "minimal",
        label: "Minimal",
        inject: () =>
          "Use a minimalistic style with clean shapes and limited colors.",
      },
    },
  },

  mood: {
    id: "mood",
    label: "Mood",
    type: "single",
    options: {
      calm: {
        id: "calm",
        label: "Calm",
        inject: () =>
          "Convey a calm, peaceful, and soothing mood.",
      },
      dramatic: {
        id: "dramatic",
        label: "Dramatic",
        inject: () =>
          "Convey intense, dramatic emotions with strong contrast.",
      },
      dark: {
        id: "dark",
        label: "Dark",
        inject: () =>
          "Convey a dark, moody, and mysterious atmosphere.",
        tier: "pro",
      },
    },
  },

  composition: {
    id: "composition",
    label: "Composition",
    type: "single",
    options: {
      centered: {
        id: "centered",
        label: "Centered",
        inject: () =>
          "Use a centered composition with clear subject focus.",
      },
      ruleOfThirds: {
        id: "ruleOfThirds",
        label: "Rule of Thirds",
        inject: () =>
          "Compose the scene using the rule of thirds.",
      },
      wide: {
        id: "wide",
        label: "Wide Shot",
        inject: () =>
          "Use a wide-angle composition to show environment and scale.",
      },
    },
  },

  lighting: {
    id: "lighting",
    label: "Lighting",
    type: "single",
    options: {
      natural: {
        id: "natural",
        label: "Natural Light",
        inject: () =>
          "Use natural, soft lighting.",
      },
      studio: {
        id: "studio",
        label: "Studio Light",
        inject: () =>
          "Use controlled studio lighting with soft shadows.",
      },
      neon: {
        id: "neon",
        label: "Neon",
        inject: () =>
          "Use neon lighting with vibrant highlights.",
        tier: "pro",
      },
    },
  },

  quality: {
    id: "quality",
    label: "Output Quality",
    type: "single",
    options: {
      standard: {
        id: "standard",
        label: "Standard",
        inject: () => "",
      },
      masterpiece: {
        id: "masterpiece",
        label: "Masterpiece",
        tier: "pro",
        inject: () =>
          "Ensure the output is of masterpiece-level quality, suitable for professional use.",
      },
    },
  },
};
