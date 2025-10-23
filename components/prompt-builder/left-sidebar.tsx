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
  Sun,
  Moon,
  ShoppingCart,
  User,
  Settings,
  BarChart,
  Calendar,
  Mail,
  MessageSquare,
  Image,
  Video,
  Music,
  Columns,
  Rows,
  Layers,
  Grid,
  LayoutDashboard,
  TabletSmartphone,
  Chrome,
  Apple,
  Box,
  Package,
  Sparkles,
  Zap,
  Eye,
  EyeOff,
  Palette,
  Droplet,
  Contrast,
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
    { id: "ecommerce", icon: ShoppingCart, label: "E-commerce" },
    { id: "dashboard", icon: BarChart, label: "Dashboard" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "messaging", icon: MessageSquare, label: "Messaging" },
    { id: "gallery", icon: Image, label: "Gallery" },
    { id: "video", icon: Video, label: "Video" },
    { id: "music", icon: Music, label: "Music" },
    { id: "email", icon: Mail, label: "Email" },
  ];

  const layoutConfigs = [
    { id: "card", icon: CreditCard, label: "Card" },
    { id: "list", icon: List, label: "List" },
    { id: "grid-2x2", icon: Grid, label: "2x2 Grid" },
    { id: "grid-3x3", icon: LayoutGrid, label: "3x3 Grid" },
    { id: "grid-4x4", icon: Layers, label: "4x4 Grid" },
    { id: "table", icon: Table, label: "Table" },
    { id: "sidebar-left", icon: PanelLeftClose, label: "Sidebar Left" },
    { id: "sidebar-right", icon: PanelRightClose, label: "Sidebar Right" },
    { id: "columns-2", icon: Columns, label: "2 Columns" },
    { id: "columns-3", icon: Columns, label: "3 Columns" },
    { id: "rows", icon: Rows, label: "Rows" },
    { id: "masonry", icon: Package, label: "Masonry" },
  ];

  const framingTypes = [
    { id: "fullscreen", icon: Maximize, label: "Full Screen" },
    { id: "card", icon: CreditCard, label: "Card" },
    { id: "browser", icon: Monitor, label: "Browser" },
    { id: "chrome", icon: Chrome, label: "Chrome" },
    { id: "mac", icon: Laptop, label: "Mac App" },
    { id: "iphone", icon: Smartphone, label: "iPhone" },
    { id: "ipad", icon: TabletSmartphone, label: "iPad" },
    { id: "clay", icon: Square, label: "Clay Web" },
    { id: "box", icon: Box, label: "3D Box" },
  ];

  const styleTypes = [
    { id: "flat", label: "Flat" },
    { id: "outline", label: "Outline" },
    { id: "minimalist", label: "Minimalist" },
    { id: "glass", label: "Glass" },
    { id: "glassmorphism", label: "Glassmorphism" },
    { id: "neomorphism", label: "Neomorphism" },
    { id: "neumorphism", label: "Neumorphism" },
    { id: "ios", label: "iOS" },
    { id: "material", label: "Material" },
    { id: "brutalist", label: "Brutalist" },
    { id: "gradient", label: "Gradient" },
    { id: "shadow", label: "Shadow" },
    { id: "3d", label: "3D" },
    { id: "retro", label: "Retro" },
    { id: "futuristic", label: "Futuristic" },
  ];

  const accentColors = [
    { id: "blue", color: "bg-blue-500", label: "Blue" },
    { id: "indigo", color: "bg-indigo-500", label: "Indigo" },
    { id: "violet", color: "bg-violet-500", label: "Violet" },
    { id: "purple", color: "bg-purple-500", label: "Purple" },
    { id: "fuchsia", color: "bg-fuchsia-500", label: "Fuchsia" },
    { id: "pink", color: "bg-pink-500", label: "Pink" },
    { id: "rose", color: "bg-rose-500", label: "Rose" },
    { id: "red", color: "bg-red-500", label: "Red" },
    { id: "orange", color: "bg-orange-500", label: "Orange" },
    { id: "amber", color: "bg-amber-500", label: "Amber" },
    { id: "yellow", color: "bg-yellow-500", label: "Yellow" },
    { id: "lime", color: "bg-lime-500", label: "Lime" },
    { id: "green", color: "bg-green-500", label: "Green" },
    { id: "emerald", color: "bg-emerald-500", label: "Emerald" },
    { id: "teal", color: "bg-teal-500", label: "Teal" },
    { id: "cyan", color: "bg-cyan-500", label: "Cyan" },
    { id: "sky", color: "bg-sky-500", label: "Sky" },
  ];

  const backgroundColors = [
    { id: "transparent", label: "Transparent", color: "bg-transparent border-2 border-white/20" },
    { id: "white", label: "White", color: "bg-white" },
    { id: "black", label: "Black", color: "bg-black" },
    { id: "neutral", label: "Neutral", color: "bg-neutral-800" },
    { id: "gray", label: "Gray", color: "bg-gray-800" },
    { id: "slate", label: "Slate", color: "bg-slate-800" },
    { id: "zinc", label: "Zinc", color: "bg-zinc-800" },
    { id: "stone", label: "Stone", color: "bg-stone-800" },
    { id: "gradient-blue", label: "Blue Gradient", color: "bg-gradient-to-br from-blue-600 to-blue-900" },
    { id: "gradient-purple", label: "Purple Gradient", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
    { id: "gradient-green", label: "Green Gradient", color: "bg-gradient-to-br from-green-600 to-teal-600" },
    { id: "gradient-orange", label: "Orange Gradient", color: "bg-gradient-to-br from-orange-600 to-red-600" },
  ];

  const animations = [
    { id: "fade-in", label: "Fade In" },
    { id: "slide-in", label: "Slide In" },
    { id: "zoom-in", label: "Zoom In" },
    { id: "bounce", label: "Bounce" },
    { id: "pulse", label: "Pulse" },
    { id: "shake", label: "Shake" },
    { id: "rotate", label: "Rotate" },
    { id: "flip", label: "Flip" },
    { id: "blur-in", label: "Blur In" },
    { id: "parallax", label: "Parallax" },
    { id: "scroll-reveal", label: "Scroll Reveal" },
    { id: "stagger", label: "Stagger" },
  ];

  const spacing = [
    { id: "compact", label: "Compact" },
    { id: "cozy", label: "Cozy" },
    { id: "comfortable", label: "Comfortable" },
    { id: "spacious", label: "Spacious" },
    { id: "generous", label: "Generous" },
  ];

  const typography = [
    { id: "sans-serif", label: "Sans Serif" },
    { id: "serif", label: "Serif" },
    { id: "mono", label: "Monospace" },
    { id: "display", label: "Display" },
    { id: "handwriting", label: "Handwriting" },
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
                  className={`h-20 flex flex-col items-center justify-center gap-1 transition-all ${
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
                  className={`h-20 flex flex-col items-center justify-center gap-1 transition-all ${
                    state.layoutConfig === config.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <config.icon className="w-5 h-5" />
                  <span className="text-xs text-center">{config.label}</span>
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
                  className={`h-20 flex flex-col items-center justify-center gap-1 transition-all ${
                    state.framing === frame.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <frame.icon className="w-5 h-5" />
                  <span className="text-xs text-center">{frame.label}</span>
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
                  className={`h-16 flex items-center justify-center transition-all ${
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
                className={`h-16 flex flex-col items-center justify-center gap-1 transition-all ${
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
                className={`h-16 flex flex-col items-center justify-center gap-1 transition-all ${
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
            <div className="grid grid-cols-6 gap-2">
              {accentColors.map((accent) => (
                <button
                  key={accent.id}
                  onClick={() => updateState({ accentColor: accent.id })}
                  className={`w-10 h-10 rounded-full ${accent.color} transition-all ${
                    state.accentColor === accent.id
                      ? "ring-2 ring-white ring-offset-2 ring-offset-[#0f0f0f] scale-110"
                      : "hover:scale-105"
                  }`}
                  title={accent.label}
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
                  <span className="text-xs text-white/60 text-center">{bg.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">ANIMATIONS</h3>
            <div className="grid grid-cols-3 gap-2">
              {animations.map((anim) => (
                <Button
                  key={anim.id}
                  variant="ghost"
                  onClick={() => updateState({ animation: anim.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.animation === anim.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <span className="text-xs">{anim.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">SPACING</h3>
            <div className="grid grid-cols-3 gap-2">
              {spacing.map((space) => (
                <Button
                  key={space.id}
                  variant="ghost"
                  onClick={() => updateState({ spacing: space.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.spacing === space.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <span className="text-xs">{space.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white/80 tracking-wider">TYPOGRAPHY</h3>
            <div className="grid grid-cols-3 gap-2">
              {typography.map((typo) => (
                <Button
                  key={typo.id}
                  variant="ghost"
                  onClick={() => updateState({ typography: typo.id })}
                  className={`h-14 flex items-center justify-center transition-all ${
                    state.typography === typo.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  <span className="text-xs">{typo.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
