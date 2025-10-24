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

  const generatePrompt = () => {
    const parts = Object.entries(state)
      .filter(([k, v]) => k !== "generatedPrompts" && v)
      .map(([k, v]) => `${k}: ${v}`);
    return `Research prompt: ${parts.join(", ")}`;
  };

  return (
    <div className="w-80 bg-gradient-to-b from-purple-950/50 to-black border-l border-purple-500/20 flex flex-col backdrop-blur-xl">
      <div className="p-4 border-b border-purple-500/20">
        <h2 className="text-sm font-semibold text-white tracking-wider mb-4">GENERATED PROMPTS</h2>
        <Button onClick={() => addToPrompts(generatePrompt())} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
          <Sparkles className="w-4 h-4 mr-2" />
          Add to Prompt
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {state.generatedPrompts.length > 0 && (
            <div className="space-y-2 mb-4">
              <h3 className="text-xs font-semibold text-purple-300 tracking-wider">YOUR PROMPTS</h3>
              {state.generatedPrompts.map((p, i) => (
                <div key={i} className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-3 text-sm text-white/80">
                  {p}
                </div>
              ))}
            </div>
          )}

          <h3 className="text-xs font-semibold text-purple-300 tracking-wider mb-3">QUICK MODIFIERS</h3>
          {modifiers.map((m, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 border border-purple-500/20 rounded-lg p-3 flex items-center justify-between group transition-all">
              <span className="text-sm text-white/70 group-hover:text-white/90 flex-1">{m}</span>
              <Button size="sm" variant="ghost" onClick={() => addToPrompts(m)} className="ml-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {state.generatedPrompts.length > 0 && (
        <div className="p-4 border-t border-purple-500/20">
          <Button variant="outline" className="w-full border-purple-500/20 text-white hover:bg-purple-500/10" onClick={() => navigator.clipboard.writeText(state.generatedPrompts.join("\n\n"))}>
            Copy All Prompts
          </Button>
        </div>
      )}
    </div>
  );
}
