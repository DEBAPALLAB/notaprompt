"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Sparkles } from "lucide-react";
import { BuilderState } from "./index";

interface RightSidebarProps {
  state: BuilderState;
  addToPrompts: (prompt: string) => void;
}

export default function RightSidebar({ state, addToPrompts }: RightSidebarProps) {
  const promptModifiers = [
    "Add custom prompt",
    "Add details",
    "Change texts, names, brands",
    "Use Lucide icons",
    "Make responsive",
    "Adapt to dark mode",
    "Animate element by element on scroll",
    "Animate when in view observed, fade in, slide in, blur in...",
    "Add parallax scrolling to the background",
  ];

  const generateMainPrompt = () => {
    const parts = [];

    if (state.layoutType) parts.push(`${state.layoutType} layout`);
    if (state.layoutConfig) parts.push(`${state.layoutConfig} configuration`);
    if (state.framing) parts.push(`${state.framing} framing`);
    if (state.style) parts.push(`${state.style} style`);
    parts.push(`${state.theme} theme`);
    parts.push(`${state.accentColor} accent color`);
    if (state.backgroundColor !== "transparent") {
      parts.push(`${state.backgroundColor} background`);
    }
    parts.push(`${state.deviceMode} optimized`);

    return `Create a ${parts.join(", ")}`;
  };

  return (
    <div className="w-80 bg-[#0f0f0f] border-l border-white/10 flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-sm font-semibold text-white tracking-wider mb-4">GENERATED PROMPTS</h2>
        <Button
          onClick={() => addToPrompts(generateMainPrompt())}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Add to Prompt
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {state.generatedPrompts.length > 0 && (
            <div className="space-y-2 mb-4">
              <h3 className="text-xs font-semibold text-white/60 tracking-wider">YOUR PROMPTS</h3>
              {state.generatedPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3 text-sm text-white/80"
                >
                  {prompt}
                </div>
              ))}
            </div>
          )}

          <h3 className="text-xs font-semibold text-white/60 tracking-wider mb-3">QUICK MODIFIERS</h3>

          {promptModifiers.map((modifier, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 flex items-center justify-between group transition-all"
            >
              <span className="text-sm text-white/70 group-hover:text-white/90 flex-1">
                {modifier}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => addToPrompts(modifier)}
                className="ml-2 text-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {state.generatedPrompts.length > 0 && (
        <div className="p-4 border-t border-white/10">
          <Button
            variant="outline"
            className="w-full border-white/10 text-white hover:bg-white/5"
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
