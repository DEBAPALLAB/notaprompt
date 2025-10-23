'use client'
import Galaxy from '../components/Galaxy';
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Spline from "@splinetool/react-spline"
import PromptBuilder from "@/components/prompt-builder"

export default function Home() {
  const cards = [
    {
      title: "Web Prompt Builder",
      desc: "Generate prompts optimized for web applications and UI workflows.",
      icon: "🌐",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Research Prompt Builder",
      desc: "Design prompts tailored for academic or research-based content.",
      icon: "📚",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "AI Content Builder",
      desc: "Create prompts for AI-generated text, images, and content workflows.",
      icon: "🤖",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Marketing Prompt Builder",
      desc: "Build creative prompts for marketing campaigns and social media.",
      icon: "📈",
      color: "from-yellow-400 to-orange-400"
    }
  ]
  const [started, setStarted] = useState(false)

  if (started) return <PromptBuilder />

  return (
    <main className="relative w-screen min-h-screen bg-black text-white overflow-hidden">

      {/* ================= Navbar ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">Prompt Builder</span>
        </div>
        <div className="flex items-center gap-6 text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* ================= Hero Section ================= */}
      {/* ================= Hero Section ================= */}
<section className="relative flex w-full min-h-screen overflow-hidden">

  {/* ===== Right: Spline Background with Gradient Overlay ===== */}
  <div className="absolute inset-y-0 right-0 w-1/2">
    <Spline
      scene="https://prod.spline.design/0mTO-vHkBx0HiNtv/scene.splinecode"
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
  </div>

  {/* ===== Left: Hero Content ===== */}
  <div className="relative z-10 flex flex-col justify-center w-1/2 px-10 md:px-20">
    {/* Headline */}
    <motion.h1
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
    >
      Build Next-Level Prompts
    </motion.h1>

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed"
    >
      Whether it’s web apps, AI content, marketing campaigns, or research, create, preview, and deploy perfect prompts with style and precision. Everything you need in one sleek dashboard.
    </motion.p>

    {/* Hero CTAs */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex gap-4 mb-12"
    >
      <Button
        onClick={() => setStarted(true)}
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600
                   text-white font-semibold px-12 py-6 text-lg rounded-2xl shadow-xl shadow-blue-500/50
                   transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(0,255,255,0.4)]"
      >
        <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
        Start Building
      </Button>
      <Button
        size="lg"
        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-6 rounded-2xl transition-all hover:scale-105"
      >
        Watch Demo
      </Button>
    </motion.div>

    {/* Feature Highlights */}
    <motion.div
      className="flex flex-wrap gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1 }}
    >
      {[
        "Live Preview", "100+ Templates", "AI Powered", "Customizable"
      ].map((feat, idx) => (
        <div
          key={feat}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white/80 font-medium transition-all hover:scale-105"
        >
          <span className="text-cyan-400 text-xl">✨</span> {feat}
        </div>
      ))}
    </motion.div>

    {/* Floating Particle Dots */}
    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
    <div className="absolute top-32 left-24 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60" />
    <div className="absolute bottom-20 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-50" />
  </div>
</section>

              <section id="features" className="relative z-10 py-32 flex flex-col items-center gap-20">
  
              {/* ================= React Bits Galaxy Background ================= */}
              <Galaxy className="absolute inset-0 -z-20 opacity-20" />

              {/* ================= Gradient Overlay ================= */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 pointer-events-none -z-10"></div>

              {/* ================= Section Title ================= */}
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-12 text-white/90 tracking-tight text-center"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
              >
                {"Choose Your Prompt Builder".split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: idx * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* ================= 2x2 Grid of Cards ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full max-w-6xl relative z-10">
                {cards.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className={`relative w-72 h-96 bg-black/60 backdrop-blur-3xl border border-gray-800 rounded-3xl overflow-hidden
                                shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_80px_rgba(0,255,255,0.5)]
                                hover:scale-105 transition-all duration-500 cursor-pointer`}
                    initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeInOut" }}
                  >
                    {/* Floating Neon Icon */}
                    <div
                      className={`absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center
                                  text-5xl drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-pulse`}
                      style={{ fontFamily: "'IBM Plex Serif', serif" }}
                    >
                      {item.icon}
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-cyan-400 opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-purple-400 opacity-40 animate-pulse"></div>

                    {/* Card Content */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-6 flex flex-col items-center">
                      <motion.h3
                        className="text-xl font-bold text-white/90 mb-2"
                        style={{ fontFamily: "'IBM Plex Serif', serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.2, duration: 0.6, ease: "easeInOut" }}
                      >
                        {item.title}
                      </motion.h3>

                      <p className="text-white/80 text-sm mb-4 font-['IBM Plex Sans']">
                        {item.desc}
                      </p>

                      <Button
                        className={`w-full bg-gradient-to-r ${item.color} text-white shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all`}
                      >
                        Try Now
                      </Button>
                    </div>

                    {/* Optional Animated Border */}
                    <div className="absolute inset-0 border-2 rounded-3xl pointer-events-none border-gradient animate-[borderRotate_6s_linear_infinite]"></div>
                  </motion.div>
                ))}
              </div>

            </section>


      {/* ================= Footer ================= */}
      <footer className="py-12 text-center text-white/50">
        © 2025 Prompt Builder. All rights reserved.
      </footer>

    </main>
  )
}
