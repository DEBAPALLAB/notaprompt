"use client";
import { compilePrompt } from "@/lib/compilePrompt";

const result = compilePrompt({
  builder: "coding",
  baseInput: "Build a JWT authentication system",
  selections: {
    taskType: "generate",
    language: "typescript",
    framework: "nextjs",
    testing: "unit",
  },
  logicPills: ["edgeCases", "validation"],
  persona: "seniorBackend",
  mode: "aggressive",
});

console.log(result);

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Search, Image as ImageIcon, Sparkles, Zap, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <nav className="border-b border-white/10 backdrop-blur-xl bg-black/30">
          <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">notaprompt.in</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#features" className="text-white/60 hover:text-white transition">Features</Link>
              <Link href="#builders" className="text-white/60 hover:text-white transition">Builders</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        <section className="max-w-full mx-auto px-6 pt-32 pb-20 text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
            <span className="text-sm text-white/80">The Future of Prompt Engineering</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Craft Perfect
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Prompts
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-5xl mx-auto mb-12 leading-relaxed">
            Visual prompt builders for every use case. No more guessing, no more trial and error.
            Build, preview, and export production-ready prompts in seconds.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-7 text-lg rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Building Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white font-semibold px-8 py-7 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100K+</div>
              <div className="text-sm text-white/40">Prompts Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-white/40">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-sm text-white/40">Possibilities</div>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-full  px-6 mx-[10%] py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-white/60">Everything you need to create perfect prompts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/70 transition">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-white/60 leading-relaxed">
                Build complex prompts in seconds with our intuitive visual interface. No coding required.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/70 transition">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Suggestions</h3>
              <p className="text-white/60 leading-relaxed">
                AI-powered recommendations help you create better prompts with proven patterns.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/50 group-hover:shadow-xl group-hover:shadow-pink-500/70 transition">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Production Ready</h3>
              <p className="text-white/60 leading-relaxed">
                Export optimized prompts that work perfectly across all major AI platforms.
              </p>
            </div>
          </div>
        </section>

        <section id="builders" className="max-w-full mx-[6%] px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Specialized Prompt Builders</h2>
            <p className="text-xl text-white/60">Choose the perfect builder for your use case</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/builder/coding" className="group block">
              <div className="relative h-full p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl hover:from-blue-500/20 hover:to-cyan-500/20 transition-all hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/70 transition">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">Coding Assistant</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Generate perfect prompts for code generation, debugging, refactoring, and documentation.
                    Built specifically for developers.
                  </p>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Code Generation Templates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Framework-Specific Options
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Language & Style Controls
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition">
                    Start Building Code Prompts
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/builder/research" className="group block">
              <div className="relative h-full p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl hover:from-purple-500/20 hover:to-pink-500/20 transition-all hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/70 transition">
                    <Search className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">Research Helper</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Create prompts for research, analysis, summarization, and data extraction.
                    Perfect for academics and analysts.
                  </p>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      Research Methodologies
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      Citation & Formatting
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      Analysis Depth Controls
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40 transition">
                    Start Building Research Prompts
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/builder/creative" className="group block">
              <div className="relative h-full p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl hover:from-orange-500/20 hover:to-red-500/20 transition-all hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/50 group-hover:shadow-xl group-hover:shadow-orange-500/70 transition">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">Creative Studio</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Design prompts for image generation, video creation, and creative content.
                    Built for artists and creators.
                  </p>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Style & Aesthetic Controls
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Composition Templates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      Platform-Specific Options
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-orange-500/30 group-hover:shadow-xl group-hover:shadow-orange-500/40 transition">
                    Start Building Creative Prompts
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join thousands of creators, developers, and researchers who are building better prompts every day.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-8 text-xl rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Get Started for Free
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 backdrop-blur-xl bg-black/30 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">notaprompt.in</span>
              </div>
              <p className="text-white/40 text-sm">© 2025 notaprompt.in. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
