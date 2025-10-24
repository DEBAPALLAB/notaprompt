"use client";

import { BuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PreviewPanelProps {
  state: BuilderState;
}

export default function PreviewPanel({ state }: PreviewPanelProps) {
  const hasSelection = state.layoutType || state.layoutConfig || state.framing || state.style;

  return (
    <div className="flex-1 bg-[#0a0a0a] flex flex-col">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl min-h-[500px] flex items-center justify-center">
            {!hasSelection ? (
              <p className="text-white/40 text-sm">Select a layout type to preview</p>
            ) : (
              <div className="p-8 text-center space-y-4 max-w-md">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Preview Mode Active</p>
                  <p className="text-white/60 text-sm">
                    Your selections are being compiled into a prompt
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 text-left">
                  {state.layoutType && (
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-xs text-white/40">Layout</p>
                      <p className="text-sm text-white capitalize">{state.layoutType}</p>
                    </div>
                  )}
                  {state.layoutConfig && (
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-xs text-white/40">Config</p>
                      <p className="text-sm text-white capitalize">{state.layoutConfig}</p>
                    </div>
                  )}
                  {state.framing && (
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-xs text-white/40">Framing</p>
                      <p className="text-sm text-white capitalize">{state.framing}</p>
                    </div>
                  )}
                  {state.style && (
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-xs text-white/40">Style</p>
                      <p className="text-sm text-white capitalize">{state.style}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white/80 tracking-wider mb-4">LAYOUT CONFIG</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {state.accentColor}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Background</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white capitalize">
                    {state.backgroundColor}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
