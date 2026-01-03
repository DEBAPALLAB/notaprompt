export type Tier = "free" | "pro" | "enterprise";
export type Mode = "creative" | "aggressive" | "safe" | "compliant";

export interface CompileContext {
  selections: Record<string, string | string[]>;
  mode: Mode;
  persona?: string;
}

export interface IngredientOption {
  id: string;
  label: string;
  tier?: Tier;

  /** Injects deterministic prompt text */
  inject: (ctx: CompileContext) => string;

  /** Option is disabled in these modes */
  excludeInModes?: Mode[];
}

export interface IngredientCategory {
  id: string;
  label: string;
  type: "single" | "multi";
  tier?: Tier;
  options: Record<string, IngredientOption>;
}
