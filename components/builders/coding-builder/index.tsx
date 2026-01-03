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
  generatedPrompts: string[];
}

export default function CodingPromptBuilder() {
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
  };

  const addToPrompts = (prompt: string) => {
    setState((prev) => ({
      ...prev,
      generatedPrompts: [prompt], // overwrite instead of append
    }));
  };


  return (
    <div className="max-h-screen bg-black flex">
      <LeftSidebar state={state} updateState={updateState} resetState={resetState} />
      <PreviewPanel state={state} />
      <RightSidebar state={state} addToPrompts={addToPrompts} />
    </div>
  );
}
