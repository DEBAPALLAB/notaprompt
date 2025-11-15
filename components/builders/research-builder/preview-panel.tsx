"use client";

import { ResearchBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, BookOpen } from "lucide-react";

interface PreviewPanelProps {
  state: ResearchBuilderState;
}

export default function PreviewPanel({ state }: PreviewPanelProps) {
  const missingRequired = !state.researchType || !state.methodology;

  const selectedEntries = Object.entries(state)
    .filter(([key, value]) => key !== "generatedPrompts" && value);

  return (
    <div className="flex-1 bg-black flex flex-col">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">

          {/* Warning for missing required fields */}
          {missingRequired && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs p-3 rounded">
              Please select both <strong>Research Type</strong> and <strong>Methodology</strong> to generate a prompt.
            </div>
          )}

          {/* Main Preview Card */}
          <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-xl min-h-[450px] p-8 flex items-center justify-center backdrop-blur-xl">

            {/* If nothing selected yet */}
            {!state.researchType && !state.methodology ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-purple-500/10 mx-auto flex items-center justify-center">
                  <Search className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-white/40 text-sm">
                  Select options to build your research prompt
                </p>
              </div>
            ) : (
              <div className="w-full max-w-3xl bg-purple-950/40 p-8 rounded-xl border border-purple-500/30 backdrop-blur-xl">

                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-1">
                    {state.researchType && (
                      <p className="text-lg text-white capitalize">
                        {state.researchType.replace(/-/g, " ")}
                      </p>
                    )}
                    {state.methodology && (
                      <p className="text-purple-300 text-sm capitalize">
                        {state.methodology.replace(/-/g, " ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Selected Categories List */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {selectedEntries.map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-xs text-purple-300 capitalize tracking-wider">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white/80 text-sm capitalize">
                        {String(value).replace(/-/g, " ")}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
