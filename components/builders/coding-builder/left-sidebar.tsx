"use client";

import { Button } from "@/components/ui/button";
import {
  Code2,
  Bug,
  RefreshCw,
  FileText,
  TestTube,
  Zap,
  Home,
} from "lucide-react";
import { CodingBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { motion } from "framer-motion";

interface LeftSidebarProps {
  state: CodingBuilderState;
  updateState: (updates: Partial<CodingBuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({
  state,
  updateState,
  resetState,
}: LeftSidebarProps) {
  const taskTypes = [
    { id: "generate", icon: Code2, label: "Code Generation" },
    { id: "debug", icon: Bug, label: "Debugging" },
    { id: "refactor", icon: RefreshCw, label: "Refactoring" },
    { id: "document", icon: FileText, label: "Documentation" },
    { id: "test", icon: TestTube, label: "Testing" },
    { id: "optimize", icon: Zap, label: "Optimization" },
  ];

  const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "csharp",
    "cpp",
    "go",
    "rust",
    "php",
    "ruby",
    "swift",
    "kotlin",
  ];

  const frameworks = [
    "react",
    "nextjs",
    "vue",
    "angular",
    "svelte",
    "django",
    "flask",
    "express",
    "fastapi",
    "spring",
    "dotnet",
    "laravel",
  ];

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="
        rounded-2xl
        border border-white/10
        bg-[rgba(0,0,0,0.35)]
        backdrop-blur-[18px]
        p-4
        space-y-3
        shadow-[0_8px_24px_rgba(0,0,0,0.35)]
      "
    >
      <h3 className="text-xs font-semibold text-blue-300 tracking-wider">
        {title}
      </h3>
      {children}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="
        w-80
        flex flex-col
        bg-[rgba(15,23,42,0.55)]
        border-r border-white/10
        backdrop-blur-[22px]
        shadow-[0_20px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* HEADER */}
      <div className="p-4 border-b border-white/10 space-y-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white tracking-wider">
            CODING ASSISTANT
          </h2>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetState}
              className="text-xs text-white/50 hover:text-white hover:bg-white/5"
            >
              Reset
            </Button>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-6">

          {/* TASK TYPE */}
          <Section title="TASK TYPE">
            <div className="grid grid-cols-2 gap-2">
              {taskTypes.map((task) => {
                const active = state.taskType === task.id;

                return (
                  <motion.button
                    key={task.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => updateState({ taskType: task.id })}
                    className={`
                      h-16 rounded-xl flex flex-col items-center justify-center gap-1
                      transition-all
                      ${active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"}
                    `}
                  >
                    <task.icon className="w-5 h-5" />
                    <span className="text-[11px] text-center">
                      {task.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </Section>

          {/* SIMPLE GRID SECTIONS */}
          {[
            ["LANGUAGE", "language", languages, 3],
            ["FRAMEWORK", "framework", frameworks, 3],
            ["CODE STYLE", "codeStyle", ["clean", "functional", "oop", "minimal", "verbose", "modern"], 3],
            ["COMPLEXITY", "complexity", ["beginner", "intermediate", "advanced", "expert"], 2],
            ["DOCUMENTATION", "documentation", ["inline", "jsdoc", "detailed", "minimal", "none"], 3],
            ["TESTING", "testing", ["unit", "integration", "e2e", "all", "none"], 3],
            ["OPTIMIZATION", "optimization", ["performance", "memory", "readability", "balanced"], 2],
            ["ERROR HANDLING", "errorHandling", ["try-catch", "promises", "async-await", "comprehensive", "basic"], 3],
          ].map(([title, key, options, cols]) => (
            <Section key={title as string} title={title as string}>
              <div className={`grid grid-cols-${cols} gap-2`}>
                {(options as string[]).map((opt) => {
                  const active = state[key as keyof CodingBuilderState] === opt;

                  return (
                    <motion.button
                      key={opt}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() =>
                        updateState({ [key as keyof CodingBuilderState]: opt })
                      }
                      className={`
                        h-11 rounded-lg text-xs capitalize
                        ${active
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"}
                      `}
                    >
                      {opt}
                    </motion.button>
                  );
                })}
              </div>
            </Section>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
}
