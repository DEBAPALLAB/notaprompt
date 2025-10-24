"use client";

import { CreativeBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, Palette } from "lucide-react";

interface PreviewPanelProps {
  state: CreativeBuilderState;
}

export default function PreviewPanel({ state }: PreviewPanelProps) {
  const hasSelection = state.contentType || state.style;

  return (
    <div className="flex-1 bg-black flex flex-col">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-950/30 to-black border border-orange-500/20 rounded-xl min-h-[500px] p-8 flex items-center justify-center backdrop-blur-xl">
            {!hasSelection ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 mx-auto flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-orange-400" />
                </div>
                <p className="text-white/40 text-sm">Select options to visualize your creative prompt</p>
              </div>
            ) : (
              <div className="w-full max-w-4xl">
                <div className="bg-gradient-to-br from-orange-950/50 to-black/50 p-8 rounded-xl border border-orange-500/30 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      {state.contentType && <div className="text-white capitalize">{state.contentType.replace("-", " ")}</div>}
                      {state.style && <div className="text-orange-300 text-sm capitalize">{state.style.replace("-", " ")}</div>}
                    </div>
                  </div>
                  {state.aspectRatio && (
                    <div className="border-2 border-orange-500/30 rounded-lg p-6 flex items-center justify-center h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                      <span className="text-orange-300 text-sm">Preview: {state.aspectRatio}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-orange-950/30 to-black border border-orange-500/20 rounded-xl p-6 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-orange-300 tracking-wider mb-4">CONFIGURATION</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(state).filter(([key]) => key !== "generatedPrompts" && state[key as keyof CreativeBuilderState]).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="text-xs text-orange-400/60 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {String(value).replace(/-/g, " ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
