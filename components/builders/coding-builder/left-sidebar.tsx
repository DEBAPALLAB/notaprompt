"use client";

import { Button } from "@/components/ui/button";
import { Code2, FileCode, Bug, RefreshCw, FileText, TestTube, Zap, Shield, Home } from "lucide-react";
import { CodingBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface LeftSidebarProps {
  state: CodingBuilderState;
  updateState: (updates: Partial<CodingBuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({ state, updateState, resetState }: LeftSidebarProps) {
  const taskTypes = [
    { id: "generate", icon: Code2, label: "Code Generation" },
    { id: "debug", icon: Bug, label: "Debugging" },
    { id: "refactor", icon: RefreshCw, label: "Refactoring" },
    { id: "document", icon: FileText, label: "Documentation" },
    { id: "test", icon: TestTube, label: "Testing" },
    { id: "optimize", icon: Zap, label: "Optimization" },
  ];

  const languages = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
    { id: "csharp", label: "C#" },
    { id: "cpp", label: "C++" },
    { id: "go", label: "Go" },
    { id: "rust", label: "Rust" },
    { id: "php", label: "PHP" },
    { id: "ruby", label: "Ruby" },
    { id: "swift", label: "Swift" },
    { id: "kotlin", label: "Kotlin" },
  ];

  const frameworks = [
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "vue", label: "Vue" },
    { id: "angular", label: "Angular" },
    { id: "svelte", label: "Svelte" },
    { id: "django", label: "Django" },
    { id: "flask", label: "Flask" },
    { id: "express", label: "Express" },
    { id: "fastapi", label: "FastAPI" },
    { id: "spring", label: "Spring" },
    { id: "dotnet", label: ".NET" },
    { id: "laravel", label: "Laravel" },
  ];

  const codeStyles = [
    { id: "clean", label: "Clean Code" },
    { id: "functional", label: "Functional" },
    { id: "oop", label: "OOP" },
    { id: "minimal", label: "Minimal" },
    { id: "verbose", label: "Verbose" },
    { id: "modern", label: "Modern" },
  ];

  const complexity = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];

  const documentation = [
    { id: "inline", label: "Inline Comments" },
    { id: "jsdoc", label: "JSDoc/Docstrings" },
    { id: "detailed", label: "Detailed Docs" },
    { id: "minimal", label: "Minimal" },
    { id: "none", label: "No Docs" },
  ];

  const testing = [
    { id: "unit", label: "Unit Tests" },
    { id: "integration", label: "Integration Tests" },
    { id: "e2e", label: "E2E Tests" },
    { id: "all", label: "All Tests" },
    { id: "none", label: "No Tests" },
  ];

  const optimization = [
    { id: "performance", label: "Performance" },
    { id: "memory", label: "Memory" },
    { id: "readability", label: "Readability" },
    { id: "balanced", label: "Balanced" },
  ];

  const errorHandling = [
    { id: "try-catch", label: "Try-Catch" },
    { id: "promises", label: "Promises" },
    { id: "async-await", label: "Async/Await" },
    { id: "comprehensive", label: "Comprehensive" },
    { id: "basic", label: "Basic" },
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-blue-950/50 to-black border-r border-blue-500/20 flex flex-col backdrop-blur-xl">
      <div className="p-4 border-b border-blue-500/20 flex items-center justify-between">
        <div>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-2 text-sm mb-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <h2 className="text-sm font-semibold text-white tracking-wider">CODING ASSISTANT</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetState}
          className="text-xs text-white/60 hover:text-white hover:bg-white/5"
        >
          Reset
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">TASK TYPE</h3>
            <div className="grid grid-cols-2 gap-2">
              {taskTypes.map((task) => (
                <Button
                  key={task.id}
                  variant="ghost"
                  onClick={() => updateState({ taskType: task.id })}
                  className={`h-20 flex flex-col items-center justify-center gap-1 transition-all ${
                    state.taskType === task.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <task.icon className="w-5 h-5" />
                  <span className="text-xs text-center">{task.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">PROGRAMMING LANGUAGE</h3>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang.id}
                  variant="ghost"
                  onClick={() => updateState({ language: lang.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.language === lang.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{lang.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">FRAMEWORK</h3>
            <div className="grid grid-cols-3 gap-2">
              {frameworks.map((fw) => (
                <Button
                  key={fw.id}
                  variant="ghost"
                  onClick={() => updateState({ framework: fw.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.framework === fw.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{fw.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">CODE STYLE</h3>
            <div className="grid grid-cols-3 gap-2">
              {codeStyles.map((style) => (
                <Button
                  key={style.id}
                  variant="ghost"
                  onClick={() => updateState({ codeStyle: style.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.codeStyle === style.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{style.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">COMPLEXITY LEVEL</h3>
            <div className="grid grid-cols-2 gap-2">
              {complexity.map((level) => (
                <Button
                  key={level.id}
                  variant="ghost"
                  onClick={() => updateState({ complexity: level.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.complexity === level.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{level.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">DOCUMENTATION</h3>
            <div className="grid grid-cols-3 gap-2">
              {documentation.map((doc) => (
                <Button
                  key={doc.id}
                  variant="ghost"
                  onClick={() => updateState({ documentation: doc.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.documentation === doc.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs text-center">{doc.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">TESTING</h3>
            <div className="grid grid-cols-3 gap-2">
              {testing.map((test) => (
                <Button
                  key={test.id}
                  variant="ghost"
                  onClick={() => updateState({ testing: test.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.testing === test.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{test.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">OPTIMIZATION</h3>
            <div className="grid grid-cols-2 gap-2">
              {optimization.map((opt) => (
                <Button
                  key={opt.id}
                  variant="ghost"
                  onClick={() => updateState({ optimization: opt.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.optimization === opt.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs">{opt.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-blue-300 tracking-wider">ERROR HANDLING</h3>
            <div className="grid grid-cols-3 gap-2">
              {errorHandling.map((err) => (
                <Button
                  key={err.id}
                  variant="ghost"
                  onClick={() => updateState({ errorHandling: err.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.errorHandling === err.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-blue-500/20"
                  }`}
                >
                  <span className="text-xs text-center">{err.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
