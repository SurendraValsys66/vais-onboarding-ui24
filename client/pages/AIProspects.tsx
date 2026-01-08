import React, { useState } from "react";
import { Zap, Search, Sparkle, ChevronLeft } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AIProspects() {
  const [searchQuery, setSearchQuery] = useState("");

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
            <div className="relative flex flex-col">
              <Search className="absolute left-4 top-3 w-4 h-4 text-valasys-gray-400" />
              <Textarea
                placeholder="Marketing specialists in Canada with Google Ads experience"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rows={4}
                className="w-full pl-10 pr-4 py-2 text-sm border border-valasys-gray-300 rounded-lg placeholder:text-valasys-gray-400 focus:outline-none focus:ring-2 focus:ring-valasys-orange focus:border-transparent resize-none"
              />
              <div className="flex items-center justify-end gap-2 mt-2 px-2 py-1">
                <Sparkle className="w-3.5 h-3.5 text-valasys-orange fill-valasys-orange" />
                <Sparkle className="w-3.5 h-3.5 text-valasys-orange fill-valasys-orange" />
                <span className="text-xs font-medium text-valasys-gray-600 bg-white px-1.5 py-0.5">
                  0/10
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-valasys-gray-100"
                >
                  <ChevronLeft className="w-4 h-4 text-valasys-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
