"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Home } from "lucide-react";
import { ResearchBuilderState } from "./index";

interface LeftSidebarProps {
  state: ResearchBuilderState;
  updateState: (updates: Partial<ResearchBuilderState>) => void;
  resetState: () => void;
}

export default function LeftSidebar({ state, updateState, resetState }: LeftSidebarProps) {

  const Section = ({ title, field, items }: any) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-purple-300 tracking-wider">
          {title}
        </h3>

        {state[field] && (
          <button
            onClick={() => updateState({ [field]: "" })}
            className="text-[10px] text-purple-400 hover:text-purple-200 transition"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {items.map((item: any) => {
          const active = state[field] === item.id;

          return (
            <Button
              key={item.id}
              onClick={() => updateState({ [field]: item.id })}
              variant="ghost"
              className={`h-14 text-xs transition-all duration-200 ${
                active
                  ? "bg-purple-600/90 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 scale-[1.03]"
                  : "bg-white/5 hover:bg-white/10 text-white/60 border border-purple-500/20 scale-[1]"
              }`}
            >
              {item.label}
            </Button>
          );
        })}
      </div>

      <div className="border-b border-purple-500/10 my-3"></div>
    </div>
  );

  const researchTypes = [
    { id: "literature-review", label: "Literature Review" },
    { id: "systematic-review", label: "Systematic Review" },
    { id: "meta-analysis", label: "Meta-Analysis" },
    { id: "case-study", label: "Case Study" },
    { id: "policy-analysis", label: "Policy Analysis" },
    { id: "market-research", label: "Market Research" },
    { id: "trend-analysis", label: "Trend Analysis" },
    { id: "gap-analysis", label: "Gap Analysis" },
    { id: "root-cause-analysis", label: "Root Cause Analysis" },
    { id: "hypothesis-testing", label: "Hypothesis Testing" },
    { id: "survey-analysis", label: "Survey Analysis" },
    { id: "theoretical-analysis", label: "Theoretical Analysis" },
    { id: "comparative-analysis", label: "Comparative Analysis" },
    { id: "data-extraction", label: "Data Extraction" },
  ];

  const methodologies = [
    { id: "qualitative", label: "Qualitative" },
    { id: "quantitative", label: "Quantitative" },
    { id: "mixed-methods", label: "Mixed Methods" },
    { id: "experimental", label: "Experimental" },
    { id: "correlational", label: "Correlational" },
    { id: "phenomenological", label: "Phenomenological" },
    { id: "ethnographic", label: "Ethnographic" },
    { id: "grounded-theory", label: "Grounded Theory" },
    { id: "case-method", label: "Case Method" }
  ];

  const depthLevels = [
    { id: "brief-overview", label: "Brief Overview" },
    { id: "standard-detail", label: "Standard Detail" },
    { id: "extended-analysis", label: "Extended Analysis" },
    { id: "expert-in-depth", label: "Expert In-Depth" },
  ];

  const sources = [
    { id: "peer-reviewed-journals", label: "Peer-reviewed Journals" },
    { id: "academic-papers", label: "Academic Papers" },
    { id: "books", label: "Books" },
    { id: "government-reports", label: "Govt. Reports" },
    { id: "datasets", label: "Datasets / Surveys" },
    { id: "news-media", label: "News Media" },
    { id: "web-sources", label: "Web Sources" },
    { id: "multi-source", label: "Multi-Source Research" },
  ];

  const outputFormats = [
    { id: "summary", label: "Summary" },
    { id: "bullet-points", label: "Bullet Points" },
    { id: "essay", label: "Essay" },
    { id: "report", label: "Report" },
    { id: "research-paper", label: "Research Paper" },
    { id: "thesis-chapter", label: "Thesis Chapter" },
    { id: "presentation-outline", label: "PPT Outline" },
    { id: "executive-summary", label: "Executive Summary" },
    { id: "exam-notes", label: "Exam Notes" },
  ];

  const citationStyles = [
    { id: "apa", label: "APA" },
    { id: "mla", label: "MLA" },
    { id: "chicago", label: "Chicago" },
    { id: "harvard", label: "Harvard" },
    { id: "ieee", label: "IEEE" },
    { id: "vancouver", label: "Vancouver" },
    { id: "turabian", label: "Turabian" },
    { id: "bluebook", label: "Bluebook (Law)" },
  ];

  const analysisTypes = [
    { id: "descriptive", label: "Descriptive" },
    { id: "critical", label: "Critical" },
    { id: "comparative", label: "Comparative" },
    { id: "thematic", label: "Thematic" },
    { id: "swot", label: "SWOT" },
    { id: "pestle", label: "PESTLE" },
    { id: "root-cause", label: "Root Cause" },
    { id: "quantitative-metrics", label: "Quantitative Metrics" },
    { id: "argumentative", label: "Argumentative" },
  ];

  return (
    <div className="w-80 bg-black border-r border-purple-500/20 flex flex-col backdrop-blur-xl">

      <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
        <div>
          <Link href="/" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 text-sm mb-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <h2 className="text-sm font-semibold text-white tracking-wider">RESEARCH BUILDER</h2>
        </div>
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

          <Section title="RESEARCH TYPE" items={researchTypes} field="researchType" />
          <Section title="METHODOLOGY" items={methodologies} field="methodology" />
          <Section title="DEPTH" items={depthLevels} field="depth" />
          <Section title="SOURCES" items={sources} field="sources" />
          <Section title="OUTPUT FORMAT" items={outputFormats} field="format" />
          <Section title="CITATION STYLE" items={citationStyles} field="citations" />
          <Section title="ANALYSIS TYPE" items={analysisTypes} field="analysis" />

        </div>
      </ScrollArea>
    </div>
  );
}
