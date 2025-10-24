"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Sparkles } from "lucide-react";
import { CodingBuilderState } from "./index";

interface RightSidebarProps {
  state: CodingBuilderState;
  addToPrompts: (prompt: string) => void;
}

export default function RightSidebar({ state, addToPrompts }: RightSidebarProps) {
  const promptModifiers = [
    "Add detailed code comments",
    "Include error handling examples",
    "Provide usage examples",
    "Add type definitions",
    "Include edge cases",
    "Follow best practices",
    "Add performance considerations",
    "Include security checks",
    "Add logging statements",
    "Follow SOLID principles",
    "Include unit tests",
    "Add integration examples",
  ];

  const generateMainPrompt = () => {
    const parts = [];

    if (state.taskType) parts.push(`${state.taskType} task`);
    if (state.language) parts.push(`using ${state.language}`);
    if (state.framework) parts.push(`with ${state.framework} framework`);
    if (state.codeStyle) parts.push(`following ${state.codeStyle} style`);
    if (state.complexity) parts.push(`at ${state.complexity} level`);
    if (state.documentation) parts.push(`with ${state.documentation} documentation`);
    if (state.testing) parts.push(`including ${state.testing}`);
    if (state.optimization) parts.push(`optimized for ${state.optimization}`);
    if (state.errorHandling) parts.push(`with ${state.errorHandling} error handling`);

    return `Create code for ${parts.join(", ")}`;
  };

  return (
    <div className="w-80 bg-gradient-to-b from-blue-950/50 to-black border-l border-blue-500/20 flex flex-col backdrop-blur-xl">
      <div className="p-4 border-b border-blue-500/20">
        <h2 className="text-sm font-semibold text-white tracking-wider mb-4">GENERATED PROMPTS</h2>
        <Button
          onClick={() => addToPrompts(generateMainPrompt())}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Add to Prompt
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {state.generatedPrompts.length > 0 && (
            <div className="space-y-2 mb-4">
              <h3 className="text-xs font-semibold text-blue-300 tracking-wider">YOUR PROMPTS</h3>
              {state.generatedPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3 text-sm text-white/80 backdrop-blur-xl"
                >
                  {prompt}
                </div>
              ))}
            </div>
          )}

          <h3 className="text-xs font-semibold text-blue-300 tracking-wider mb-3">QUICK MODIFIERS</h3>

          {promptModifiers.map((modifier, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/10 border border-blue-500/20 rounded-lg p-3 flex items-center justify-between group transition-all backdrop-blur-xl"
            >
              <span className="text-sm text-white/70 group-hover:text-white/90 flex-1">
                {modifier}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => addToPrompts(modifier)}
                className="ml-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {state.generatedPrompts.length > 0 && (
        <div className="p-4 border-t border-blue-500/20">
          <Button
            variant="outline"
            className="w-full border-blue-500/20 text-white hover:bg-blue-500/10 backdrop-blur-xl"
            onClick={() => {
              const allPrompts = state.generatedPrompts.join("\n\n");
              navigator.clipboard.writeText(allPrompts);
            }}
          >
            Copy All Prompts
          </Button>
        </div>
      )}
    </div>
  );
}
