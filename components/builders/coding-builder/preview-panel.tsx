"use client";

import { CodingBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code2, Terminal } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreviewPanelProps {
  state: CodingBuilderState;
  activePrompt: string | null;
}

export default function PreviewPanel({
  state,
  activePrompt,
}: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);

  const hasSelection =
    state.taskType || state.language || state.framework;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="flex-1 bg-black flex flex-col"
    >
      <ScrollArea className="flex-1 px-6 py-6">
        <div className="space-y-10 max-w-5xl mx-auto">

          {/* =========================
              PREVIEW CANVAS
          ========================= */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative
              rounded-3xl
              border border-white/10
              bg-[linear-gradient(180deg,rgba(30,58,138,0.35),rgba(0,0,0,0.55))]
              backdrop-blur-[22px]
              p-10
              min-h-[420px]
              flex items-center justify-center
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            "
          >
            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />

            {!hasSelection ? (
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-blue-500/10 mx-auto flex items-center justify-center"
                >
                  <Code2 className="w-10 h-10 text-blue-400" />
                </motion.div>
                <p className="text-sm text-white/40">
                  Select options from the left to preview your coding prompt
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <Terminal className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Code Preview
                      </p>
                      <p className="text-xs text-white/40">
                        Structural preview
                      </p>
                    </div>
                  </div>

                  <div className="font-mono text-sm space-y-2 text-white/80">
                    {state.taskType && <div>// Task: {state.taskType}</div>}
                    {state.language && <div>// Language: {state.language}</div>}
                    {state.framework && <div>// Framework: {state.framework}</div>}
                    {state.codeStyle && <div>// Style: {state.codeStyle}</div>}
                    <div className="text-white/60">function generateCode() {"{"}</div>
                    <div className="pl-4 text-white/40">// implementation</div>
                    <div className="text-white/60">{"}"}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* =========================
              CONFIGURATION SUMMARY
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              rounded-3xl
              border border-white/10
              bg-[rgba(15,23,42,0.45)]
              backdrop-blur-[22px]
              p-6
              shadow-[0_14px_40px_rgba(0,0,0,0.35)]
            "
          >
            <h3 className="text-sm font-semibold text-blue-300 tracking-wider mb-4">
              CONFIGURATION
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {Object.entries(state).map(([key, value]) =>
                value ? (
                  <div key={key} className="space-y-1">
                    <p className="text-xs text-blue-400/60 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white capitalize">
                      {value}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </motion.div>

          {/* =========================
              COMPILED PROMPT OUTPUT
          ========================= */}
          <AnimatePresence>
            {activePrompt && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35 }}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-black/60
                  backdrop-blur-[22px]
                  p-6
                  space-y-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                "
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-blue-300 tracking-wider">
                    COMPILED PROMPT
                  </h3>
                  <span className="text-xs text-white/40">
                    Ready to send
                  </span>
                </div>

                <div className="max-h-64 overflow-y-auto whitespace-pre-wrap font-mono text-sm text-white/80 leading-relaxed border border-white/10 rounded-xl p-4 bg-black/40">
                  {activePrompt}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activePrompt);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    }}
                    className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/80 hover:bg-white/5 transition"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>

                  <button
                    onClick={() => {
                      localStorage.setItem("lastAI", "chatgpt");
                      window.open(
                        `https://chatgpt.com/?q=${encodeURIComponent(activePrompt)}`,
                        "_blank"
                      );
                    }}
                    className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/80 hover:bg-white/5 transition"
                  >
                    ChatGPT
                  </button>

                  <button
                    onClick={() => {
                      localStorage.setItem("lastAI", "gemini");
                      window.open(
                        `https://gemini.google.com/app?prompt=${encodeURIComponent(activePrompt)}`,
                        "_blank"
                      );
                    }}
                    className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/80 hover:bg-white/5 transition"
                  >
                    Gemini
                  </button>

                  <button
                    onClick={() => {
                      const lastAI = localStorage.getItem("lastAI");
                      const url =
                        lastAI === "gemini"
                          ? `https://gemini.google.com/app?prompt=${encodeURIComponent(activePrompt)}`
                          : `https://chatgpt.com/?q=${encodeURIComponent(activePrompt)}`;

                      window.open(url, "_blank");
                    }}
                    className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-blue-300 hover:bg-white/5 transition"
                  >
                    Last used
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </motion.div>
  );
}
