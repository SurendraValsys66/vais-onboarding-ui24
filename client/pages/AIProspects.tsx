import React, { useState, useEffect } from "react";
import { Zap, Search, Sparkle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Textarea } from "@/components/ui/textarea";

const PLACEHOLDERS = [
  "Marketing specialists in Canada with Google Ads experience",
  "HR Directors in Europe at companies with 200–500 employees",
  "CTOs in New York with cloud expertise",
  "Engineers in Finland within the renewable energy sector",
];

export default function AIProspects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-full overflow-hidden bg-white flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-6">
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl font-bold text-valasys-gray-900 mb-1 text-center leading-tight">
                Find your next prospects faster
              </h1>
              <p className="text-3xl font-bold text-valasys-gray-600 text-center">
                with the{" "}
                <span className="font-bold text-valasys-orange">
                  power of AI
                </span>
                <Zap className="inline ml-1 w-5 h-5 text-valasys-orange stroke-2" />
              </p>
            </div>
          </div>

          {/* Search Bar Section */}
          <div>
            <div className="relative">
              <Search className="absolute left-4 top-3 w-4 h-4 text-valasys-gray-400" />
              <Textarea
                key={placeholderIndex}
                placeholder={PLACEHOLDERS[placeholderIndex]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rows={4}
                className="w-full pl-10 pr-20 py-2 text-sm border border-valasys-gray-300 rounded-lg placeholder:text-valasys-gray-400 focus:outline-none focus:ring-2 focus:ring-valasys-orange focus:border-transparent resize-none animate-in fade-in-0 duration-500"
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
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
