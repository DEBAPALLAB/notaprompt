"use client";

import { useState } from "react";
import LeftSidebar from "./left-sidebar";
import PreviewPanel from "./preview-panel";
import RightSidebar from "./right-sidebar";

export interface CodingBuilderState {
  taskType: string;
  language: string;
  framework: string;
  codeStyle: string;
  complexity: string;
  documentation: string;
  testing: string;
  optimization: string;
  errorHandling: string;
  generatedPrompts: string[]; // keep for now, even if unused
}

export default function CodingPromptBuilder() {
  // LEFT SIDEBAR STATE
  const [state, setState] = useState<CodingBuilderState>({
    taskType: "",
    language: "",
    framework: "",
    codeStyle: "",
    complexity: "",
    documentation: "",
    testing: "",
    optimization: "",
    errorHandling: "",
    generatedPrompts: [],
  });

  // 🔑 SINGLE SOURCE OF TRUTH FOR OUTPUT
  const [activePrompt, setActivePrompt] = useState<string | null>(null);

  const updateState = (updates: Partial<CodingBuilderState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState({
      taskType: "",
      language: "",
      framework: "",
      codeStyle: "",
      complexity: "",
      documentation: "",
      testing: "",
      optimization: "",
      errorHandling: "",
      generatedPrompts: [],
    });
    setActivePrompt(null);
  };

  // 👇 RightSidebar calls this
  const addToPrompts = (prompt: string) => {
    setActivePrompt(prompt);
  };

  return (
    <div className="max-h-screen bg-black flex">
      <LeftSidebar
        state={state}
        updateState={updateState}
        resetState={resetState}
      />

      {/* MIDDLE PREVIEW — OUTPUT LIVES HERE */}
      <PreviewPanel
        state={state}
        activePrompt={activePrompt}
      />

      {/* RIGHT SIDEBAR — INPUT ONLY */}
      <RightSidebar
        state={state}
        addToPrompts={addToPrompts}
      />
    </div>
  );
}
