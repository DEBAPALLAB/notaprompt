"use client";

import { useState } from "react";
import LeftSidebar from "./left-sidebar";
import PreviewPanel from "./preview-panel";
import RightSidebar from "./right-sidebar";

export interface BuilderState {
  layoutType: string;
  layoutConfig: string;
  framing: string;
  style: string;
  theme: "light" | "dark";
  accentColor: string;
  backgroundColor: string;
  deviceMode: "web" | "mobile";
  animation: string;
  spacing: string;
  typography: string;
  generatedPrompts: string[];
}

export default function PromptBuilder() {
  const [state, setState] = useState<BuilderState>({
    layoutType: "",
    layoutConfig: "",
    framing: "",
    style: "",
    theme: "dark",
    accentColor: "blue",
    backgroundColor: "transparent",
    deviceMode: "web",
    animation: "",
    spacing: "",
    typography: "",
    generatedPrompts: [],
  });

  const updateState = (updates: Partial<BuilderState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState({
      layoutType: "",
      layoutConfig: "",
      framing: "",
      style: "",
      theme: "dark",
      accentColor: "blue",
      backgroundColor: "transparent",
      deviceMode: "web",
      animation: "",
      spacing: "",
      typography: "",
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
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <LeftSidebar state={state} updateState={updateState} resetState={resetState} />
      <PreviewPanel state={state} />
      <RightSidebar state={state} addToPrompts={addToPrompts} />
    </div>
  );
}
