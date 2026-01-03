"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Sparkles } from "lucide-react";

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
const runMagicFix = async () => {
  if (!baseInput.trim()) return;

  setFixing(true);
  try {
    const res = await fetch("/api/ai/enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: baseInput }),
    });

    const data = await res.json();

    if (data.enhanced) {
      setBaseInput(data.enhanced);
    }
  } catch (e) {
    console.error("Magic Fix failed", e);
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
    <div className="w-80 bg-gradient-to-b from-blue-950/50 to-black border-l border-blue-500/20 flex flex-col backdrop-blur-xl">
      {/* HEADER / INPUT / LOGIC */}
      <div className="p-4 border-b border-blue-500/20 space-y-6">
        <h2 className="text-sm font-semibold text-white tracking-wider">
          COMPILED PROMPT
        </h2>

        {/* BASE INPUT */}
        <div className="space-y-2">
          <label className="text-xs text-blue-300 tracking-wider">
            WHAT DO YOU WANT TO BUILD?
          </label>
          <div className="space-y-2">
            <Textarea
              value={baseInput}
              onChange={(e) => setBaseInput(e.target.value)}
              placeholder="e.g. auth system"
              className="bg-black/50 border border-blue-500/20 text-white"
            />

            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-400/60">
                AI assist
              </span>


              <Button
                size="sm"
                onClick={runMagicFix}
                disabled={fixing || !baseInput.trim()}
                className="h-7 px-3 bg-blue-600/80 hover:bg-blue-600 text-white text-xs rounded-md"
              >
                {fixing ? "Fixing…" : "✨ Magic Fix"}
              </Button>
            </div>
          </div>

        </div>

        {/* LOGIC PILLS SECTION */}
        <div className="rounded-xl border border-blue-500/20 bg-black/40 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">
              AI REASONING
            </h3>
            <span className="text-[10px] text-white/40">Optional</span>
          </div>

          <div className="space-y-2">
            {AVAILABLE_LOGIC_PILLS.map((pill) => {
              const active = logicPills.includes(pill.id);

              return (
                <div
                  key={pill.id}
                  onClick={() =>
                    setLogicPills((prev) =>
                      active ? prev.filter((p) => p !== pill.id) : [...prev, pill.id]
                    )
                  }
                  className={`cursor-pointer rounded-lg border px-3 py-3 transition-all ${
                    active
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-blue-500/20 bg-black/30 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className={`text-sm ${active ? "text-white" : "text-white/70"}`}>
                        {pill.label}
                      </p>
                      <p className="text-xs text-white/40 mt-1">
                        {pill.desc}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <div
                        className={`w-9 h-5 rounded-full transition-colors ${
                          active ? "bg-blue-500" : "bg-white/20"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            active ? "translate-x-4" : "translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
         <div className="rounded-xl border border-blue-500/20 bg-black/40 p-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs text-blue-300 tracking-wider">
        ACTIVE PERSONA
      </p>
      <p className="text-sm text-white mt-1">
        {
          AVAILABLE_PERSONAS.find((p) => p.id === persona)?.title
        }
      </p>
    </div>

    <Button
      size="sm"
      variant="ghost"
      onClick={() => setPersonaOpen(true)}
      className="text-blue-400 hover:text-blue-300"
    >
      Change
    </Button>
  </div>
</div>
   
        {/* ACTION BUTTON */}
        <Button
          disabled={!baseInput.trim()}
          onClick={() => {
            const compiled = generateCompiledPrompt();
            if (compiled) addToPrompts(compiled);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Add Compiled Prompt
        </Button>
      </div>

      {/* PROMPT OUTPUT */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {state.generatedPrompts.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-blue-300 tracking-wider">
                YOUR PROMPT
              </h3>

              {state.generatedPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3 text-sm text-white/80 whitespace-pre-wrap"
                >
                  {prompt}
                </div>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider mb-3">
              QUICK MODIFIERS (LEGACY)
            </h3>

            {promptModifiers.map((modifier, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-blue-500/20 rounded-lg p-3 flex items-center justify-between"
              >
                <span className="text-sm text-white/70 flex-1">
                  {modifier}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => addToPrompts(modifier)}
                  className="ml-2 text-blue-400 hover:text-blue-300"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      {personaOpen && (
  <div className="fixed inset-0 z-50 flex justify-end bg-black/60">
    <div className="w-96 h-full bg-black border-l border-blue-500/20 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg text-white font-semibold">
          Select Expert Persona
        </h2>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setPersonaOpen(false)}
        >
          Close
        </Button>
      </div>

      <div className="space-y-3">
        {AVAILABLE_PERSONAS.map((p) => {
          const active = persona === p.id;

          return (
            <div
              key={p.id}
              onClick={() => {
                setPersona(p.id);
                setPersonaOpen(false);
              }}
              className={`cursor-pointer rounded-xl border p-4 transition-all ${
                active
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-blue-500/20 bg-black/40 hover:bg-white/5"
              }`}
            >
              <p className="text-sm text-white">{p.title}</p>
              <p className="text-xs text-white/40 mt-1">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
)}

    </div>
  );
}
