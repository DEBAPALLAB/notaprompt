"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Video, Palette, Sparkles, Home } from "lucide-react";
import { CreativeBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface LeftSidebarProps {
  state: CreativeBuilderState;
  updateState: (updates: Partial<CreativeBuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({ state, updateState, resetState }: LeftSidebarProps) {
  const contentTypes = [
    { id: "image", label: "Image" },
    { id: "video", label: "Video" },
    { id: "animation", label: "Animation" },
    { id: "3d-render", label: "3D Render" },
    { id: "illustration", label: "Illustration" },
    { id: "photo", label: "Photography" },
  ];

  const styles = [
    { id: "realistic", label: "Realistic" },
    { id: "anime", label: "Anime" },
    { id: "cartoon", label: "Cartoon" },
    { id: "abstract", label: "Abstract" },
    { id: "minimalist", label: "Minimalist" },
    { id: "cinematic", label: "Cinematic" },
    { id: "watercolor", label: "Watercolor" },
    { id: "oil-painting", label: "Oil Painting" },
    { id: "digital-art", label: "Digital Art" },
  ];

  const moods = [
    { id: "dramatic", label: "Dramatic" },
    { id: "peaceful", label: "Peaceful" },
    { id: "energetic", label: "Energetic" },
    { id: "mysterious", label: "Mysterious" },
    { id: "romantic", label: "Romantic" },
    { id: "dark", label: "Dark" },
  ];

  const compositions = [
    { id: "centered", label: "Centered" },
    { id: "rule-of-thirds", label: "Rule of Thirds" },
    { id: "symmetrical", label: "Symmetrical" },
    { id: "dynamic", label: "Dynamic" },
    { id: "close-up", label: "Close-up" },
    { id: "wide-angle", label: "Wide Angle" },
  ];

  const colors = [
    { id: "vibrant", label: "Vibrant" },
    { id: "pastel", label: "Pastel" },
    { id: "monochrome", label: "Monochrome" },
    { id: "warm", label: "Warm Tones" },
    { id: "cool", label: "Cool Tones" },
    { id: "neon", label: "Neon" },
  ];

  const lighting = [
    { id: "natural", label: "Natural Light" },
    { id: "studio", label: "Studio Light" },
    { id: "dramatic", label: "Dramatic" },
    { id: "soft", label: "Soft" },
    { id: "backlit", label: "Backlit" },
    { id: "golden-hour", label: "Golden Hour" },
  ];

  const quality = [
    { id: "4k", label: "4K" },
    { id: "8k", label: "8K" },
    { id: "hd", label: "HD" },
    { id: "ultra-hd", label: "Ultra HD" },
  ];

  const aspectRatios = [
    { id: "1:1", label: "1:1 Square" },
    { id: "16:9", label: "16:9 Landscape" },
    { id: "9:16", label: "9:16 Portrait" },
    { id: "4:3", label: "4:3 Standard" },
    { id: "21:9", label: "21:9 Ultrawide" },
  ];

  const platforms = [
    { id: "midjourney", label: "Midjourney" },
    { id: "dalle", label: "DALL-E" },
    { id: "stable-diffusion", label: "Stable Diffusion" },
    { id: "leonardo", label: "Leonardo AI" },
    { id: "runway", label: "Runway" },
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-orange-950/50 to-black border-r border-orange-500/20 flex flex-col backdrop-blur-xl">
      <div className="p-4 border-b border-orange-500/20 flex items-center justify-between">
        <div>
          <Link href="/" className="text-orange-400 hover:text-orange-300 transition inline-flex items-center gap-2 text-sm mb-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <h2 className="text-sm font-semibold text-white tracking-wider">CREATIVE STUDIO</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={resetState} className="text-xs text-white/60 hover:text-white hover:bg-white/5">
          Reset
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">CONTENT TYPE</h3>
            <div className="grid grid-cols-2 gap-2">
              {contentTypes.map((type) => (
                <Button key={type.id} variant="ghost" onClick={() => updateState({ contentType: type.id })}
                  className={`h-16 ${state.contentType === type.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs">{type.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">STYLE</h3>
            <div className="grid grid-cols-3 gap-2">
              {styles.map((s) => (
                <Button key={s.id} variant="ghost" onClick={() => updateState({ style: s.id })}
                  className={`h-14 ${state.style === s.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs text-center">{s.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">MOOD</h3>
            <div className="grid grid-cols-3 gap-2">
              {moods.map((m) => (
                <Button key={m.id} variant="ghost" onClick={() => updateState({ mood: m.id })}
                  className={`h-14 ${state.mood === m.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs">{m.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">COMPOSITION</h3>
            <div className="grid grid-cols-2 gap-2">
              {compositions.map((c) => (
                <Button key={c.id} variant="ghost" onClick={() => updateState({ composition: c.id })}
                  className={`h-14 ${state.composition === c.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs text-center">{c.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">COLORS</h3>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((c) => (
                <Button key={c.id} variant="ghost" onClick={() => updateState({ colors: c.id })}
                  className={`h-14 ${state.colors === c.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs text-center">{c.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">LIGHTING</h3>
            <div className="grid grid-cols-2 gap-2">
              {lighting.map((l) => (
                <Button key={l.id} variant="ghost" onClick={() => updateState({ lighting: l.id })}
                  className={`h-14 ${state.lighting === l.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs text-center">{l.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">QUALITY</h3>
            <div className="grid grid-cols-4 gap-2">
              {quality.map((q) => (
                <Button key={q.id} variant="ghost" onClick={() => updateState({ quality: q.id })}
                  className={`h-14 ${state.quality === q.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs">{q.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">ASPECT RATIO</h3>
            <div className="grid grid-cols-3 gap-2">
              {aspectRatios.map((ar) => (
                <Button key={ar.id} variant="ghost" onClick={() => updateState({ aspectRatio: ar.id })}
                  className={`h-14 ${state.aspectRatio === ar.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs">{ar.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-orange-300 tracking-wider">PLATFORM</h3>
            <div className="grid grid-cols-3 gap-2">
              {platforms.map((p) => (
                <Button key={p.id} variant="ghost" onClick={() => updateState({ platform: p.id })}
                  className={`h-14 ${state.platform === p.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-orange-500/20"}`}>
                  <span className="text-xs text-center">{p.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
