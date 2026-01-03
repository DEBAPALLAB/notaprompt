"use client";

import { CodingBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code2, Terminal, FileCode } from "lucide-react";
import { useState } from "react";

interface PreviewPanelProps {
  state: CodingBuilderState;
  activePrompt: string | null;
}


export default function PreviewPanel({
  state,
  activePrompt,
}: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);

  const hasSelection = state.taskType || state.language || state.framework;

  return (
    <div className="flex-1 bg-black flex flex-col">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-500/20 rounded-xl min-h-[500px] p-8 flex items-center justify-center backdrop-blur-xl">
            {!hasSelection ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 mx-auto flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-blue-400" />
                </div>
                <p className="text-white/40 text-sm">Select options from the left to see your coding prompt preview</p>
              </div>
            ) : (
              <div className="w-full max-w-4xl animate-in fade-in duration-700">
                <div className="bg-gradient-to-br from-blue-950/50 to-black/50 text-white p-8 rounded-xl border border-blue-500/30 backdrop-blur-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <Terminal className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-blue-500/20 rounded w-48 mb-2" />
                        <div className="h-3 bg-blue-500/10 rounded w-32" />
                      </div>
                    </div>

                    <div className="bg-black/50 border border-blue-500/20 rounded-lg p-6 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-blue-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-blue-300 text-xs">code-preview.tsx</span>
                      </div>

                      <div className="space-y-2">
                        {state.taskType && (
                          <div className="flex gap-3">
                            <span className="text-blue-400/60 select-none">1</span>
                            <span className="text-cyan-400">// Task: </span>
                            <span className="text-white capitalize">{state.taskType}</span>
                          </div>
                        )}
                        {state.language && (
                          <div className="flex gap-3">
                            <span className="text-blue-400/60 select-none">2</span>
                            <span className="text-cyan-400">// Language: </span>
                            <span className="text-white capitalize">{state.language}</span>
                          </div>
                        )}
                        {state.framework && (
                          <div className="flex gap-3">
                            <span className="text-blue-400/60 select-none">3</span>
                            <span className="text-cyan-400">// Framework: </span>
                            <span className="text-white capitalize">{state.framework}</span>
                          </div>
                        )}
                        {state.codeStyle && (
                          <div className="flex gap-3">
                            <span className="text-blue-400/60 select-none">4</span>
                            <span className="text-cyan-400">// Style: </span>
                            <span className="text-white capitalize">{state.codeStyle}</span>
                          </div>
                        )}
                        <div className="flex gap-3">
                          <span className="text-blue-400/60 select-none">5</span>
                          <span className="text-purple-400">function</span>
                          <span className="text-yellow-400">generateCode</span>
                          <span className="text-white">() {"{"}</span>
                        </div>
                        <div className="flex gap-3 pl-8">
                          <span className="text-blue-400/60 select-none">6</span>
                          <span className="text-green-400">  // Your optimized code here</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-blue-400/60 select-none">7</span>
                          <span className="text-white">{"}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-500/20 rounded-xl p-6 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-blue-300 tracking-wider mb-4">CONFIGURATION</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {state.taskType && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Task Type</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.taskType}
                    </div>
                  </div>
                )}
                {state.language && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Language</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.language}
                    </div>
                  </div>
                )}
                {state.framework && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Framework</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.framework}
                    </div>
                  </div>
                )}
                {state.codeStyle && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Code Style</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.codeStyle}
                    </div>
                  </div>
                )}
                {state.complexity && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Complexity</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.complexity}
                    </div>
                  </div>
                )}
                {state.documentation && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Documentation</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.documentation}
                    </div>
                  </div>
                )}
                {state.testing && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Testing</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.testing}
                    </div>
                  </div>
                )}
                {state.optimization && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Optimization</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.optimization}
                    </div>
                  </div>
                )}
                {state.errorHandling && (
                  <div className="space-y-2">
                    <label className="text-xs text-blue-400/60">Error Handling</label>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.errorHandling}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
     {activePrompt && (
  <div className="mt-8 border-t border-blue-500/20 pt-6">
    <h3 className="text-xs font-semibold text-blue-300 tracking-wider mb-3">
      COMPILED PROMPT
    </h3>

    <div className="bg-black/60 border border-blue-500/20 rounded-xl p-4 text-sm text-white/80 whitespace-pre-wrap font-mono">
      {activePrompt}
    </div>

    {/* ACTIONS */}
    <div className="flex flex-wrap gap-2 mt-4">
      {/* COPY */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(activePrompt);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="px-3 py-1.5 text-xs rounded-md border border-blue-500/20 text-white/80 hover:bg-white/5 transition"
      >
        {copied ? "Copied ✓" : "Copy Prompt"}
      </button>

      {/* CHATGPT */}
      <button
        onClick={() => {
          localStorage.setItem("lastAI", "chatgpt");
          window.open(
            `https://chatgpt.com/?q=${encodeURIComponent(activePrompt)}`,
            "_blank"
          );
        }}
        className="px-3 py-1.5 text-xs rounded-md border border-blue-500/20 text-white/80 hover:bg-white/5 transition"
      >
        Send to ChatGPT
      </button>

      {/* GEMINI */}
      <button
        onClick={() => {
          localStorage.setItem("lastAI", "gemini");
          window.open(
            `https://gemini.google.com/app?prompt=${encodeURIComponent(
              activePrompt
            )}`,
            "_blank"
          );
        }}
        className="px-3 py-1.5 text-xs rounded-md border border-blue-500/20 text-white/80 hover:bg-white/5 transition"
      >
        Send to Gemini
      </button>

      {/* AUTO-OPEN LAST USED */}
      <button
        onClick={() => {
          const lastAI = localStorage.getItem("lastAI");

          const url =
            lastAI === "gemini"
              ? `https://gemini.google.com/app?prompt=${encodeURIComponent(
                  activePrompt
                )}`
              : `https://chatgpt.com/?q=${encodeURIComponent(activePrompt)}`;

          window.open(url, "_blank");
        }}
        className="px-3 py-1.5 text-xs rounded-md border border-blue-500/20 text-blue-300 hover:bg-white/5 transition"
      >
        Send to Last Used AI
      </button>
    </div>
  </div>
)}


    </div>
  );
}
