import React, { useState } from "react";
import { Zap, Search } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";

export default function AIProspects() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="flex h-screen overflow-hidden bg-white">
        {/* Main Content Area - No scrollbar */}
        <div className="w-full overflow-hidden flex flex-col">
          <div className="w-full max-w-4xl mx-auto px-8 py-6 flex flex-col h-full">
            {/* Header Section */}
            <div className="mb-6 flex-shrink-0">
              {/* Main Heading */}
              <div>
                <h1 className="text-3xl font-bold text-valasys-gray-900 mb-1 text-center leading-tight">
                  Find your next prospects faster
                </h1>
                <p className="text-base text-valasys-gray-600 text-center">
                  with the{" "}
                  <span className="font-semibold text-valasys-orange">power of AI</span>
                  <Zap className="inline ml-1 w-4 h-4 text-valasys-orange stroke-2" />
                </p>
              </div>
            </div>

            {/* Search Bar Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-valasys-gray-400" />
                <Input
                  type="text"
                  placeholder="Marketing specialists in Canada with Google Ads experience"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-14 py-2 text-sm border border-valasys-gray-300 rounded-lg placeholder:text-valasys-gray-400 focus:outline-none focus:ring-2 focus:ring-valasys-orange focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-valasys-gray-600 bg-white px-1.5 py-0.5">
                  0/10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
