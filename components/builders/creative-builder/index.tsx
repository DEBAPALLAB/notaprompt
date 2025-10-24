"use client";

import { useState } from "react";
import LeftSidebar from "./left-sidebar";
import PreviewPanel from "./preview-panel";
import RightSidebar from "./right-sidebar";

export interface CreativeBuilderState {
  contentType: string;
  style: string;
  mood: string;
  composition: string;
  colors: string;
  lighting: string;
  quality: string;
  aspectRatio: string;
  platform: string;
  generatedPrompts: string[];
}

export default function CreativePromptBuilder() {
  const [state, setState] = useState<CreativeBuilderState>({
    contentType: "",
    style: "",
    mood: "",
    composition: "",
    colors: "",
    lighting: "",
    quality: "",
    aspectRatio: "",
    platform: "",
    generatedPrompts: [],
  });

  const updateState = (updates: Partial<CreativeBuilderState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState({
      contentType: "",
      style: "",
      mood: "",
      composition: "",
      colors: "",
      lighting: "",
      quality: "",
      aspectRatio: "",
      platform: "",
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
