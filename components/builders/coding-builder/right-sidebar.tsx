"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { compilePrompt } from "@/lib/compilePrompt";
import { CodingBuilderState } from "./index";

interface RightSidebarProps {
  state: CodingBuilderState;
  addToPrompts: (prompt: string) => void;
}

export default function RightSidebar({ state, addToPrompts }: RightSidebarProps) {
  const [baseInput, setBaseInput] = useState("");
  const [logicPills, setLogicPills] = useState<string[]>([]);
  const [fixing, setFixing] = useState(false);

  const [persona, setPersona] = useState<string>("seniorBackend");
  const [personaOpen, setPersonaOpen] = useState(false);

  const AVAILABLE_PERSONAS = [
    {
      id: "seniorBackend",
      title: "Senior Backend Engineer",
      desc: "Scalable systems, clean architecture, correctness-first",
    },
    {
      id: "securityEngineer",
      title: "Security Engineer",
      desc: "Threat modeling, OWASP, defensive coding",
    },
    {
      id: "staffEngineer",
      title: "Staff Software Engineer",
      desc: "System design, trade-offs, long-term maintainability",
    },
    {
      id: "performanceEngineer",
      title: "Performance Engineer",
      desc: "Latency, memory efficiency, high-throughput systems",
    },
  ];

  const AVAILABLE_LOGIC_PILLS = [
    { id: "edgeCases", label: "Edge Case Analysis", desc: "Forces edge-case handling" },
    { id: "validation", label: "Input Validation", desc: "Strict input validation & safety" },
    { id: "stepByStep", label: "Step-by-Step Reasoning", desc: "Deeper structured reasoning" },
  ];

  const runMagicFix = async () => {
    if (!baseInput.trim()) return;

    setFixing(true);

    try {
      const res = await fetch("/api/ai/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: baseInput }),
        cache: "no-store",
      });

      const data = await res.json();
      console.log("Magic Fix response:", data);

      if (res.ok && typeof data.enhanced === "string") {
        setBaseInput(data.enhanced.trim());
      } else {
        console.error("Magic Fix failed:", data);
      }
    } catch (e) {
      console.error("Magic Fix error", e);
    } finally {
      setFixing(false);
    }
  };


  const generateCompiledPrompt = () => {
    if (!baseInput.trim()) return "";
    return compilePrompt({
      builder: "coding",
      baseInput,
      selections: {
        taskType: state.taskType,
        language: state.language,
        framework: state.framework,
        codeStyle: state.codeStyle,
        complexity: state.complexity,
        documentation: state.documentation,
        testing: state.testing,
        optimization: state.optimization,
        errorHandling: state.errorHandling,
      },
      logicPills,
      persona,
      mode: "aggressive",
    });
  };

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-80 flex flex-col
        bg-[rgba(15,23,42,0.55)]
        border-l border-white/10
        backdrop-blur-[22px]
        shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
    >
      {/* HEADER */}
      <div className="p-4 border-b border-white/10 space-y-6">
        <h2 className="text-sm font-semibold text-white tracking-wider">
          COMPILED PROMPT
        </h2>

        {/* INPUT */}
        <div className="space-y-2">
          <label className="text-xs text-blue-300 tracking-wider">
            WHAT DO YOU WANT TO BUILD?
          </label>

          <Textarea
            value={baseInput}
            onChange={(e) => setBaseInput(e.target.value)}
            placeholder="e.g. auth system"
            className="bg-black/40 border-white/10 text-white backdrop-blur-xl"
          />

          <div className="flex items-center justify-between">
            <span className="text-xs text-white/40">AI assist</span>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                onClick={runMagicFix}
                disabled={fixing || !baseInput.trim()}
                className="h-7 px-3 bg-blue-600/80 hover:bg-blue-600 text-xs"
              >
                {fixing ? "Fixing…" : "✨ Magic Fix"}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* LOGIC PILLS */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-3">
          <h3 className="text-xs font-semibold text-blue-300 tracking-wider">
            AI REASONING
          </h3>

          {AVAILABLE_LOGIC_PILLS.map((pill) => {
            const active = logicPills.includes(pill.id);

            return (
              <motion.div
                key={pill.id}
                layout
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setLogicPills((prev) =>
                    active ? prev.filter((p) => p !== pill.id) : [...prev, pill.id]
                  )
                }
                className={`cursor-pointer rounded-xl border px-3 py-3
                  ${active ? "bg-blue-500/10 border-blue-500" : "bg-black/30 border-white/10"}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-sm text-white">{pill.label}</p>
                    <p className="text-xs text-white/40">{pill.desc}</p>
                  </div>

                  <motion.div
                    className={`w-9 h-5 rounded-full ${active ? "bg-blue-500" : "bg-white/20"}`}
                  >
                    <motion.div
                      layout
                      className="w-4 h-4 bg-white rounded-full"
                      animate={{ x: active ? 16 : 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PERSONA */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-blue-300">ACTIVE PERSONA</p>
              <p className="text-sm text-white mt-1">
                {AVAILABLE_PERSONAS.find((p) => p.id === persona)?.title}
              </p>
            </div>

            <Button
              size="sm"
              variant="ghost"
              onClick={() => setPersonaOpen(true)}
              className="text-blue-400"
            >
              Change
            </Button>
          </div>
        </div>

        {/* ACTION */}
        <motion.div whileTap={{ scale: 0.97 }}>
          <Button
            disabled={!baseInput.trim()}
            onClick={() => {
              const compiled = generateCompiledPrompt();
              if (compiled) addToPrompts(compiled);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Add Compiled Prompt
          </Button>
        </motion.div>
      </div>

      {/* PERSONA MODAL */}
      <AnimatePresence>
        {personaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex justify-end"
          >
            <motion.div
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              exit={{ x: 40 }}
              transition={{ duration: 0.3 }}
              className="w-96 h-full bg-black/80 backdrop-blur-xl border-l border-white/10 p-6"
            >
              <h2 className="text-lg text-white font-semibold mb-6">
                Select Expert Persona
              </h2>

              <div className="space-y-3">
                {AVAILABLE_PERSONAS.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setPersona(p.id);
                      setPersonaOpen(false);
                    }}
                    className="rounded-xl border border-white/10 bg-black/40 p-4 cursor-pointer"
                  >
                    <p className="text-sm text-white">{p.title}</p>
                    <p className="text-xs text-white/40">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
