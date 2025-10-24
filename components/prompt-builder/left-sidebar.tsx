"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Home,
  Grid3x3,
  Smartphone,
  FileText,
  Bell,
  Briefcase,
  LayoutGrid,
  List,
  Table,
  PanelLeftClose,
  PanelRightClose,
  Maximize,
  CreditCard,
  Monitor,
  Laptop,
  Square,
  Palette,
  Circle,
  Sun,
  Moon,
} from "lucide-react";
import { BuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LeftSidebarProps {
  state: BuilderState;
  updateState: (updates: Partial<BuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({ state, updateState, resetState }: LeftSidebarProps) {
  const layoutTypes = [
    { id: "hero", icon: Home, label: "Hero" },
    { id: "features", icon: Grid3x3, label: "Features" },
    { id: "onboarding", icon: Smartphone, label: "Onboarding" },
    { id: "docs", icon: FileText, label: "Docs" },
    { id: "updates", icon: Bell, label: "Updates" },
    { id: "portfolio", icon: Briefcase, label: "Portfolio" },
  ];

  const layoutConfigs = [
    { id: "card", icon: CreditCard, label: "Card" },
    { id: "list", icon: List, label: "List" },
    { id: "square", icon: LayoutGrid, label: "2-2 Square" },
    { id: "table", icon: Table, label: "Table" },
    { id: "sidebar-left", icon: PanelLeftClose, label: "Sidebar Left" },
    { id: "sidebar-right", icon: PanelRightClose, label: "Sidebar Right" },
  ];

  const framingTypes = [
    { id: "fullscreen", icon: Maximize, label: "Full Screen" },
    { id: "card", icon: CreditCard, label: "Card" },
    { id: "browser", icon: Monitor, label: "Browser" },
    { id: "mac", icon: Laptop, label: "Mac App" },
    { id: "clay", icon: Square, label: "Clay Web" },
  ];

  const styleTypes = [
    { id: "flat", label: "Flat" },
    { id: "outline", label: "Outline" },
    { id: "minimalist", label: "Minimalist" },
    { id: "glass", label: "Glass" },
    { id: "ios", label: "iOS" },
    { id: "material", label: "Material" },
  ];

  const accentColors = [
    { id: "blue", color: "bg-blue-500" },
    { id: "indigo", color: "bg-indigo-500" },
    { id: "violet", color: "bg-violet-500" },
    { id: "purple", color: "bg-purple-500" },
    { id: "fuchsia", color: "bg-fuchsia-500" },
  ];

  const backgroundColors = [
    { id: "transparent", label: "Transparent", color: "bg-transparent border-2 border-white/20" },
    { id: "neutral", label: "Neutral", color: "bg-neutral-800" },
    { id: "gray", label: "Gray", color: "bg-gray-800" },
    { id: "slate", label: "Slate", color: "bg-slate-800" },
    { id: "zinc", label: "Zinc", color: "bg-zinc-800" },
    { id: "stone", label: "Stone", color: "bg-stone-800" },
  ];

  return (
    <div className="w-80 bg-[#0f0f0f] border-r border-white/10 flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white tracking-wider">PROMPT BUILDER</h2>
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
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white/80 tracking-wider">LAYOUT TYPE</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">Web</span>
                <Switch
                  checked={state.deviceMode === "mobile"}
                  onCheckedChange={(checked) => updateState({ deviceMode: checked ? "mobile" : "web" })}
                />
                <span className="text-xs text-white/40">Mobile</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {layoutTypes.map((layout) => (
                <Button
                  key={layout.id}
                  variant="ghost"
                  onClick={() => updateState({ layoutType: layout.id })}
                  className={`h-20 flex flex-col items-center justify-center gap-1 ${
                    state.layoutType === layout.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <layout.icon className="w-5 h-5" />
                  <span className="text-xs">{layout.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">LAYOUT CONFIGURATION</h3>
            <div className="grid grid-cols-3 gap-2">
              {layoutConfigs.map((config) => (
                <Button
                  key={config.id}
                  variant="ghost"
                  onClick={() => updateState({ layoutConfig: config.id })}
                  className={`h-20 flex flex-col items-center justify-center gap-1 ${
                    state.layoutConfig === config.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <config.icon className="w-5 h-5" />
                  <span className="text-xs">{config.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">FRAMING</h3>
            <div className="grid grid-cols-3 gap-2">
              {framingTypes.map((frame) => (
                <Button
                  key={frame.id}
                  variant="ghost"
                  onClick={() => updateState({ framing: frame.id })}
                  className={`h-20 flex flex-col items-center justify-center gap-1 ${
                    state.framing === frame.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <frame.icon className="w-5 h-5" />
                  <span className="text-xs">{frame.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">STYLE</h3>
            <div className="grid grid-cols-3 gap-2">
              {styleTypes.map((style) => (
                <Button
                  key={style.id}
                  variant="ghost"
                  onClick={() => updateState({ style: style.id })}
                  className={`h-16 flex items-center justify-center ${
                    state.style === style.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <span className="text-xs">{style.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">THEME</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="ghost"
                onClick={() => updateState({ theme: "light" })}
                className={`h-16 flex flex-col items-center justify-center gap-1 ${
                  state.theme === "light"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/60"
                }`}
              >
                <Sun className="w-5 h-5" />
                <span className="text-xs">Light Mode</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => updateState({ theme: "dark" })}
                className={`h-16 flex flex-col items-center justify-center gap-1 ${
                  state.theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/60"
                }`}
              >
                <Moon className="w-5 h-5" />
                <span className="text-xs">Dark Mode</span>
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">ACCENT COLOR</h3>
            <div className="flex gap-2">
              {accentColors.map((accent) => (
                <button
                  key={accent.id}
                  onClick={() => updateState({ accentColor: accent.id })}
                  className={`w-10 h-10 rounded-full ${accent.color} transition-all ${
                    state.accentColor === accent.id
                      ? "ring-2 ring-white ring-offset-2 ring-offset-[#0f0f0f] scale-110"
                      : "hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">BACKGROUND COLOR</h3>
            <div className="grid grid-cols-3 gap-2">
              {backgroundColors.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => updateState({ backgroundColor: bg.id })}
                  className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                    state.backgroundColor === bg.id
                      ? "ring-2 ring-blue-500"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className={`w-full h-8 rounded ${bg.color}`} />
                  <span className="text-xs text-white/60">{bg.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
