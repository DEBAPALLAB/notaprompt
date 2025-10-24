"use client";

import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, BarChart, Home } from "lucide-react";
import { ResearchBuilderState } from "./index";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface LeftSidebarProps {
  state: ResearchBuilderState;
  updateState: (updates: Partial<ResearchBuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({ state, updateState, resetState }: LeftSidebarProps) {
  const researchTypes = [
    { id: "literature-review", label: "Literature Review" },
    { id: "data-analysis", label: "Data Analysis" },
    { id: "summarization", label: "Summarization" },
    { id: "comparison", label: "Comparison" },
    { id: "synthesis", label: "Synthesis" },
    { id: "extraction", label: "Data Extraction" },
  ];

  const methodologies = [
    { id: "qualitative", label: "Qualitative" },
    { id: "quantitative", label: "Quantitative" },
    { id: "mixed", label: "Mixed Methods" },
    { id: "systematic", label: "Systematic" },
    { id: "meta-analysis", label: "Meta-Analysis" },
    { id: "case-study", label: "Case Study" },
  ];

  const depth = [
    { id: "overview", label: "Overview" },
    { id: "detailed", label: "Detailed" },
    { id: "comprehensive", label: "Comprehensive" },
    { id: "in-depth", label: "In-Depth" },
  ];

  const sources = [
    { id: "academic", label: "Academic Papers" },
    { id: "journals", label: "Journals" },
    { id: "books", label: "Books" },
    { id: "web", label: "Web Sources" },
    { id: "reports", label: "Reports" },
    { id: "all", label: "All Sources" },
  ];

  const format = [
    { id: "summary", label: "Summary" },
    { id: "bullet-points", label: "Bullet Points" },
    { id: "essay", label: "Essay" },
    { id: "report", label: "Report" },
    { id: "presentation", label: "Presentation" },
  ];

  const citations = [
    { id: "apa", label: "APA" },
    { id: "mla", label: "MLA" },
    { id: "chicago", label: "Chicago" },
    { id: "harvard", label: "Harvard" },
    { id: "ieee", label: "IEEE" },
  ];

  const analysis = [
    { id: "descriptive", label: "Descriptive" },
    { id: "critical", label: "Critical" },
    { id: "comparative", label: "Comparative" },
    { id: "thematic", label: "Thematic" },
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-purple-950/50 to-black border-r border-purple-500/20 flex flex-col backdrop-blur-xl">
      <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
        <div>
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center gap-2 text-sm mb-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <h2 className="text-sm font-semibold text-white tracking-wider">RESEARCH HELPER</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={resetState} className="text-xs text-white/60 hover:text-white hover:bg-white/5">
          Reset
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">RESEARCH TYPE</h3>
            <div className="grid grid-cols-2 gap-2">
              {researchTypes.map((type) => (
                <Button
                  key={type.id}
                  variant="ghost"
                  onClick={() => updateState({ researchType: type.id })}
                  className={`h-16 flex items-center justify-center transition-all ${
                    state.researchType === type.id
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"
                  }`}
                >
                  <span className="text-xs text-center">{type.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">METHODOLOGY</h3>
            <div className="grid grid-cols-2 gap-2">
              {methodologies.map((method) => (
                <Button
                  key={method.id}
                  variant="ghost"
                  onClick={() => updateState({ methodology: method.id })}
                  className={`h-14 transition-all ${
                    state.methodology === method.id
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"
                  }`}
                >
                  <span className="text-xs text-center">{method.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">DEPTH</h3>
            <div className="grid grid-cols-2 gap-2">
              {depth.map((d) => (
                <Button key={d.id} variant="ghost" onClick={() => updateState({ depth: d.id })}
                  className={`h-14 ${state.depth === d.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"}`}>
                  <span className="text-xs">{d.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">SOURCES</h3>
            <div className="grid grid-cols-2 gap-2">
              {sources.map((s) => (
                <Button key={s.id} variant="ghost" onClick={() => updateState({ sources: s.id })}
                  className={`h-14 ${state.sources === s.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"}`}>
                  <span className="text-xs text-center">{s.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">OUTPUT FORMAT</h3>
            <div className="grid grid-cols-3 gap-2">
              {format.map((f) => (
                <Button key={f.id} variant="ghost" onClick={() => updateState({ format: f.id })}
                  className={`h-14 ${state.format === f.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"}`}>
                  <span className="text-xs">{f.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">CITATION STYLE</h3>
            <div className="grid grid-cols-3 gap-2">
              {citations.map((c) => (
                <Button key={c.id} variant="ghost" onClick={() => updateState({ citations: c.id })}
                  className={`h-14 ${state.citations === c.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"}`}>
                  <span className="text-xs">{c.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-purple-300 tracking-wider">ANALYSIS TYPE</h3>
            <div className="grid grid-cols-2 gap-2">
              {analysis.map((a) => (
                <Button key={a.id} variant="ghost" onClick={() => updateState({ analysis: a.id })}
                  className={`h-14 ${state.analysis === a.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20"}`}>
                  <span className="text-xs">{a.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
