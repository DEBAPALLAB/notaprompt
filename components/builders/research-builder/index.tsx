"use client";

import { useState } from "react";
import LeftSidebar from "./left-sidebar";
import PreviewPanel from "./preview-panel";
import RightSidebar from "./right-sidebar";

export interface ResearchBuilderState {
  researchType: string;
  methodology: string;
  depth: string;
  sources: string;
  format: string;
  citations: string;
  analysis: string;
  generatedPrompts: string[];
}

export default function ResearchPromptBuilder() {
  const [state, setState] = useState<ResearchBuilderState>({
    researchType: "",
    methodology: "",
    depth: "",
    sources: "",
    format: "",
    citations: "",
    analysis: "",
    generatedPrompts: [],
  });

  const updateState = (updates: Partial<ResearchBuilderState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState({
      researchType: "",
      methodology: "",
      depth: "",
      sources: "",
      format: "",
      citations: "",
      analysis: "",
      generatedPrompts: [],
    });
  };

  const addToPrompts = (prompt: string) => {
    setState((prev) => ({
      ...prev,
      generatedPrompts: [...prev.generatedPrompts, prompt],
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
