"use client";

import { BuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  ShoppingCart,
  Mail,
  FileText,
  Grid3x3,
  User,
  BarChart,
  Image,
  Settings,
  Calendar,
  Music,
  Video,
  MessageSquare,
  Bell,
  Briefcase
} from "lucide-react";

interface PreviewPanelProps {
  state: BuilderState;
}

const getLayoutIcon = (type: string) => {
  const icons: Record<string, any> = {
    hero: Home,
    features: Grid3x3,
    ecommerce: ShoppingCart,
    dashboard: BarChart,
    profile: User,
    settings: Settings,
    calendar: Calendar,
    messaging: MessageSquare,
    gallery: Image,
    video: Video,
    music: Music,
    email: Mail,
    docs: FileText,
    updates: Bell,
    portfolio: Briefcase,
  };
  return icons[type] || Home;
};

const getAccentColorClass = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    purple: "bg-purple-500",
    fuchsia: "bg-fuchsia-500",
    pink: "bg-pink-500",
    rose: "bg-rose-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    yellow: "bg-yellow-500",
    lime: "bg-lime-500",
    green: "bg-green-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
  };
  return colors[color] || "bg-blue-500";
};

const getBgColorClass = (bgColor: string) => {
  const colors: Record<string, string> = {
    transparent: "bg-transparent",
    white: "bg-white",
    black: "bg-black",
    neutral: "bg-neutral-900",
    gray: "bg-gray-900",
    slate: "bg-slate-900",
    zinc: "bg-zinc-900",
    stone: "bg-stone-900",
    "gradient-blue": "bg-gradient-to-br from-blue-600 to-blue-900",
    "gradient-purple": "bg-gradient-to-br from-purple-600 to-pink-600",
    "gradient-green": "bg-gradient-to-br from-green-600 to-teal-600",
    "gradient-orange": "bg-gradient-to-br from-orange-600 to-red-600",
  };
  return colors[bgColor] || "bg-transparent";
};

export default function PreviewPanel({ state }: PreviewPanelProps) {
  const hasSelection = state.layoutType || state.layoutConfig || state.framing || state.style;
  const Icon = getLayoutIcon(state.layoutType);
  const accentColor = getAccentColorClass(state.accentColor);
  const bgColor = getBgColorClass(state.backgroundColor);
  const isDarkTheme = state.theme === "dark";
  const textColor = isDarkTheme ? "text-white" : "text-gray-900";
  const cardBg = isDarkTheme ? "bg-white/5" : "bg-black/5";

  const renderLayoutPreview = () => {
    if (!state.layoutType) return null;

    const commonCardClasses = `${cardBg} ${state.style === 'glass' ? 'backdrop-blur-xl bg-white/10' : ''} ${state.style === 'outline' ? 'border-2' : 'border'} ${isDarkTheme ? 'border-white/10' : 'border-black/10'} rounded-xl p-4`;

    if (state.layoutConfig === "grid-2x2" || state.layoutConfig === "grid-3x3" || state.layoutConfig === "grid-4x4") {
      const cols = state.layoutConfig === "grid-2x2" ? 2 : state.layoutConfig === "grid-3x3" ? 3 : 4;
      return (
        <div className={`grid ${cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-4`}>
          {Array.from({ length: cols * 2 }).map((_, i) => (
            <div key={i} className={commonCardClasses}>
              <div className={`w-full h-24 ${accentColor} rounded-lg mb-2`} />
              <div className={`w-full h-3 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded`} />
            </div>
          ))}
        </div>
      );
    }

    if (state.layoutConfig === "list") {
      return (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`${commonCardClasses} flex items-center gap-4`}>
              <div className={`w-16 h-16 ${accentColor} rounded-lg flex-shrink-0`} />
              <div className="flex-1 space-y-2">
                <div className={`w-3/4 h-3 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded`} />
                <div className={`w-1/2 h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded`} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (state.layoutConfig === "card") {
      return (
        <div className="space-y-6">
          <div className={commonCardClasses}>
            <div className={`w-full h-48 ${accentColor} rounded-lg mb-4`} />
            <div className={`w-3/4 h-4 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded mb-2`} />
            <div className={`w-full h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded mb-2`} />
            <div className={`w-5/6 h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded`} />
          </div>
        </div>
      );
    }

    if (state.layoutConfig === "sidebar-left" || state.layoutConfig === "sidebar-right") {
      const isLeft = state.layoutConfig === "sidebar-left";
      return (
        <div className={`flex gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-1/3 ${commonCardClasses}`}>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`w-full h-8 ${i === 0 ? accentColor : isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded`} />
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className={`${commonCardClasses} h-32`} />
            <div className={`${commonCardClasses} h-48`} />
          </div>
        </div>
      );
    }

    if (state.layoutConfig === "table") {
      return (
        <div className={commonCardClasses}>
          <div className="space-y-2">
            <div className={`flex gap-4 pb-2 border-b ${isDarkTheme ? 'border-white/10' : 'border-black/10'}`}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`flex-1 h-3 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded`} />
              ))}
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className={`flex-1 h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className={commonCardClasses}>
        <div className={`w-full h-64 ${accentColor} rounded-lg mb-4`} />
        <div className={`w-3/4 h-5 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded mb-3`} />
        <div className={`w-full h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded mb-2`} />
        <div className={`w-5/6 h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded`} />
      </div>
    );
  };

  const getFramingWrapper = (content: React.ReactNode) => {
    if (!state.framing || state.framing === "fullscreen") {
      return content;
    }

    if (state.framing === "browser" || state.framing === "chrome") {
      return (
        <div className="border border-white/20 rounded-xl overflow-hidden shadow-2xl">
          <div className={`h-8 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-gray-200'} border-b ${isDarkTheme ? 'border-white/10' : 'border-black/10'} flex items-center px-3 gap-2`}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className={`flex-1 h-5 ${isDarkTheme ? 'bg-white/5' : 'bg-black/5'} rounded mx-2`} />
          </div>
          <div className="p-4">{content}</div>
        </div>
      );
    }

    if (state.framing === "iphone" || state.framing === "ipad") {
      const width = state.framing === "iphone" ? "max-w-xs" : "max-w-md";
      return (
        <div className={`${width} mx-auto`}>
          <div className="border-8 border-black rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="bg-black h-6 flex items-center justify-center">
              <div className="w-20 h-5 bg-black rounded-full" />
            </div>
            <div className="bg-white">{content}</div>
          </div>
        </div>
      );
    }

    if (state.framing === "card") {
      return (
        <div className="border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4">
          {content}
        </div>
      );
    }

    return content;
  };

  return (
    <div className="flex-1 bg-[#0a0a0a] flex flex-col">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">
          <div className={`${bgColor} border border-white/10 rounded-xl min-h-[500px] p-8 flex items-center justify-center`}>
            {!hasSelection ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-white/5 mx-auto flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white/40" />
                </div>
                <p className="text-white/40 text-sm">Select options from the left to see a live preview</p>
              </div>
            ) : (
              <div className={`w-full max-w-4xl ${state.animation === 'fade-in' ? 'animate-in fade-in duration-700' : ''} ${state.animation === 'slide-in' ? 'animate-in slide-in-from-bottom duration-700' : ''} ${state.animation === 'zoom-in' ? 'animate-in zoom-in duration-700' : ''} ${state.animation === 'pulse' ? 'animate-pulse' : ''}`}>
                {getFramingWrapper(
                  <div className={`${bgColor} ${textColor} p-8 rounded-xl`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-16 h-16 ${accentColor} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className={`h-6 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'} rounded w-48 mb-2`} />
                          <div className={`h-3 ${isDarkTheme ? 'bg-white/10' : 'bg-black/10'} rounded w-32`} />
                        </div>
                      </div>
                      {renderLayoutPreview()}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white/80 tracking-wider mb-4">LAYOUT CONFIG</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {state.layoutType && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Layout Type</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.layoutType}
                    </div>
                  </div>
                )}
                {state.layoutConfig && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Configuration</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.layoutConfig}
                    </div>
                  </div>
                )}
                {state.framing && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Framing</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.framing}
                    </div>
                  </div>
                )}
                {state.style && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Style</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.style}
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Device Mode</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {state.deviceMode}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Theme</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {state.theme} mode
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Accent Color</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${accentColor}`} />
                    {state.accentColor}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Background</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {state.backgroundColor}
                  </div>
                </div>
                {state.animation && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Animation</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.animation}
                    </div>
                  </div>
                )}
                {state.spacing && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Spacing</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.spacing}
                    </div>
                  </div>
                )}
                {state.typography && (
                  <div className="space-y-2">
                    <label className="text-xs text-white/60">Typography</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                      {state.typography}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
