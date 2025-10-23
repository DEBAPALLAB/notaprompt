"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import PromptBuilder from "@/components/prompt-builder";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              PROMPT BUILDER
            </h1>
          </div>
        </div>

        <div className="w-full max-w-2xl z-10">
          <div className="bg-gradient-to-b from-[#1a1a1a]/90 to-[#151515]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-16 flex flex-col items-center gap-8 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Sparkles className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-white">
                Design Magical Prompts
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Create stunning UI prompts with visual controls. Build, preview, and export your perfect prompt in seconds.
              </p>
            </div>

            <Button
              onClick={() => setStarted(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-12 py-7 text-lg rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Start Building
            </Button>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Options</div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Live</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Preview</div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Combinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromptBuilder />;
}
