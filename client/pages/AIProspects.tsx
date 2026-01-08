import React, { useState, useEffect } from "react";
import { Search, Sparkle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Textarea } from "@/components/ui/textarea";

const PLACEHOLDERS = [
  "Marketing specialists in Canada with Google Ads experience",
  "HR Directors in Europe at companies with 200–500 employees",
  "CTOs in New York with cloud expertise",
  "Engineers in Finland within the renewable energy sector",
];

const AI_PHRASES = [
  "power of AI",
  "the intelligence of AI",
  "AI-driven insights",
  "AI-powered discovery",
  "next-gen AI",
];

export default function AIProspects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [aiPhraseIndex, setAiPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiPhraseIndex((prev) => (prev + 1) % AI_PHRASES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-full overflow-hidden bg-white flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-6">
          {/* Video Section */}
          <div className="mb-3 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg"
              style={{ width: "140px" }}
            >
              <source
                src="https://cdn.builder.io/o/assets%2F653b8e5d19bc41ddad7375ad6a55d878%2Fdc299ed4703d4e9a9d594d08a4710e88?alt=media&token=ca39ced4-286c-4bab-a11d-1a9ef3f888e5&apiKey=653b8e5d19bc41ddad7375ad6a55d878"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Header Section */}
          <div className="mb-3">
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl font-bold text-valasys-gray-900 mb-1 text-center leading-tight" style={{ marginTop: "-20px" }}>
                Find your next prospects faster
              </h1>
              <p className="text-3xl font-bold text-valasys-gray-600 text-center">
                with the{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={aiPhraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold bg-gradient-to-r from-valasys-orange to-valasys-orange-light bg-clip-text text-transparent inline-block"
                  >
                    {AI_PHRASES[aiPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </p>
            </div>
          </div>

          {/* Search Bar Section */}
          <div>
            <div className="relative">
              <Search className="absolute left-4 top-3 w-4 h-4 text-valasys-gray-400 pointer-events-none z-10" />
              <Textarea
                placeholder=" "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rows={4}
                className="w-full pl-10 pr-20 py-2 text-sm border border-valasys-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-valasys-orange focus:border-transparent resize-none"
              />
              <AnimatePresence mode="wait">
                {searchQuery === "" && (
                  <motion.div
                    key={placeholderIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-10 top-3 text-sm text-valasys-gray-400 pointer-events-none"
                  >
                    {PLACEHOLDERS[placeholderIndex]}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute right-3 bottom-3 flex items-center gap-1.5 pointer-events-none">
                <Sparkle className="w-4 h-4 text-valasys-orange fill-valasys-orange" />
                <span className="text-xs font-medium text-valasys-gray-600">
                  0/10
                </span>
                <ArrowRight className="w-4 h-4 text-valasys-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
