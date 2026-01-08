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
            <div className="mb-4 flex-shrink-0">
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

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col min-h-0">
              <TabsList className="border-b border-valasys-gray-200 rounded-none bg-transparent p-0 h-auto w-full justify-start gap-6 flex-shrink-0">
                <TabsTrigger
                  value="saved"
                  className="rounded-none border-b-2 border-transparent px-0 py-2 font-medium text-xs text-valasys-gray-600 hover:text-valasys-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange data-[state=active]:text-valasys-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 flex items-center justify-center">
                      <span className="text-xs">★</span>
                    </div>
                    Saved searches
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="rounded-none border-b-2 border-transparent px-0 py-2 font-medium text-xs text-valasys-gray-600 hover:text-valasys-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange data-[state=active]:text-valasys-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" />
                    Recent searches
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Saved Searches Tab */}
              <TabsContent value="saved" className="mt-3 flex-1 flex items-center justify-center">
                <p className="text-valasys-gray-500 text-sm">No saved searches yet</p>
              </TabsContent>

              {/* Recent Searches Tab */}
              <TabsContent value="recent" className="mt-3 flex-1 overflow-hidden flex flex-col">
                <div className="space-y-2 flex-1 overflow-hidden">
                  {recentSearches.slice(0, 3).map((search) => (
                    <button
                      key={search.id}
                      className="w-full p-3 rounded-lg border border-valasys-gray-200 hover:border-valasys-orange hover:bg-valasys-gray-50 transition-all text-left group text-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-valasys-gray-900 font-medium leading-tight line-clamp-2">
                            {search.query}
                          </p>
                          <p className="text-xs text-valasys-gray-500 mt-1">
                            {search.date}, {search.time}
                          </p>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-valasys-gray-400 group-hover:text-valasys-orange transition-colors flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
                <button className="w-full py-1.5 text-xs text-valasys-orange font-medium hover:text-orange-600 transition-colors flex-shrink-0 mt-2">
                  Open details
                </button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
