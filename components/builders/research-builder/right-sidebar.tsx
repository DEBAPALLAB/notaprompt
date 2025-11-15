"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Sparkles } from "lucide-react";
import { ResearchBuilderState } from "./index";

interface RightSidebarProps {
  state: ResearchBuilderState;
  addToPrompts: (prompt: string) => void;
}

export default function RightSidebar({ state, addToPrompts }: RightSidebarProps) {
  const modifiers = [
    "Include key findings summary",
    "Add methodology section",
    "Provide literature gaps",
    "Include future research directions",
    "Add statistical analysis",
    "Compare multiple viewpoints",
    "Identify research limitations",
    "Add theoretical framework",
  ];

  // 🌟 NEW — Natural Language Prompt Generator
 const generatePrompt = () => {
  const {
    researchType,
    methodology,
    depth,
    sources,
    format,
    citations,
    analysis,
  } = state;

  let prompt = "Please generate a";

  // Format
  if (format) prompt += ` well-structured **${format.replace(/-/g, " ")}**`;
  else prompt += " detailed research output";

  // Research Type + Depth
  if (researchType && depth) {
    prompt += ` that conducts a **${depth.replace(/-/g, " ")} ${researchType.replace(/-/g, " ")}**.`;
  } else if (researchType) {
    prompt += ` that conducts a **${researchType.replace(/-/g, " ")}**.`;
  } else {
    prompt += ".";
  }

  // Methodology
  if (methodology) {
    prompt += `\n\nUse a **${methodology.replace(/-/g, " ")}** research methodology`;
    if (analysis) {
      prompt += ` and apply **${analysis.replace(/-/g, " ")} analysis** throughout the response.`;
    } else {
      prompt += ".";
    }
  }

  // Sources
  if (sources) {
    prompt += `\n\nBase your findings on information from **${sources.replace(/-/g, " ")}**.`;
  }

  // Citations
  if (citations) {
    prompt += `\n\nFormat all references using **${citations.toUpperCase()} citation style**.`;
  }

  // Final academic quality request
  prompt += `\n\nEnsure the writing is clear, academic, and logically structured.`;

  return prompt.trim();
};

  const requiredMissing = !state.researchType || !state.methodology;

  return (
    <div className="w-80 bg-black border-l border-purple-500/20 flex flex-col backdrop-blur-xl">

      {/* Header */}
      <div className="p-4 border-b border-purple-500/20">
        <h2 className="text-sm font-semibold text-white tracking-wider mb-4">
          GENERATED PROMPTS
        </h2>

        {/* Add Prompt Button */}
        <Button
          disabled={requiredMissing}
          onClick={() => addToPrompts(generatePrompt())}
          className={`w-full transition-all ${
            requiredMissing
              ? "bg-purple-500/20 text-white/40 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md shadow-purple-500/20 scale-[1.02]"
          }`}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {requiredMissing ? "Select required fields" : "Add to Prompt"}
        </Button>
      </div>

      {/* Saved Prompts + Modifiers */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">

          {/* Saved Prompts */}
          {state.generatedPrompts.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-purple-300 tracking-wider mb-2">
                YOUR PROMPTS
              </h3>

              {state.generatedPrompts.map((p, i) => (
                <div
                  key={i}
                  className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-3 text-sm text-white/80 whitespace-pre-line"
                >
                  {p}
                </div>
              ))}
            </div>
          )}

          {/* Modifiers */}
          <h3 className="text-xs font-semibold text-purple-300 tracking-wider">
            QUICK MODIFIERS
          </h3>

          {modifiers.map((m, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 border border-purple-500/20 rounded-lg p-3 flex items-center justify-between group transition-all duration-150"
            >
              <span className="text-sm text-white/70 group-hover:text-white/90">
                {m}
              </span>

              <Button
                size="sm"
                variant="ghost"
                onClick={() => addToPrompts(m)}
                className="ml-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}

        </div>
      </ScrollArea>

      {/* Copy All */}
      {state.generatedPrompts.length > 0 && (
        <div className="p-4 border-t border-purple-500/20">
          <Button
            variant="outline"
            className="w-full border-purple-500/20 text-white hover:bg-purple-500/10"
            onClick={() =>
              navigator.clipboard.writeText(state.generatedPrompts.join("\n\n"))
            }
          >
            Copy All Prompts
          </Button>
        </div>
      )}
    </div>
  );
}
