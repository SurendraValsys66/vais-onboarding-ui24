import React, { useState } from "react";
import { ChevronRight, Zap, RotateCcw, ArrowUpRight, Search, X } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface RecentSearch {
  id: string;
  query: string;
  date: string;
  time: string;
}

const FilterSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6 border-b border-valasys-gray-200 pb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <h3 className="text-sm font-medium text-valasys-gray-700 flex items-center">
          {title}
        </h3>
        <ChevronRight
          className={cn(
            "w-4 h-4 text-valasys-gray-400 transition-transform duration-200",
            expanded && "rotate-90"
          )}
        />
      </button>

      {expanded && (
        <div className="space-y-2 ml-0">
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-valasys-gray-300 text-valasys-orange cursor-pointer"
              />
              <span className="text-sm text-valasys-gray-600">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AIProspects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("recent");

  const recentSearches: RecentSearch[] = [
    {
      id: "1",
      query: "Marketing specialists in Canada with Google Ads experience",
      date: "6 Jun 2025",
      time: "11:58 AM",
    },
    {
      id: "2",
      query: "Product managers in United States",
      date: "5 Jun 2025",
      time: "11:58 AM",
    },
    {
      id: "3",
      query: "Sales directors in Europe",
      date: "4 Jun 2025",
      time: "11:58 AM",
    },
    {
      id: "4",
      query: "Engineering leaders in Bay Area",
      date: "3 Jun 2025",
      time: "11:58 AM",
    },
  ];

  const filterSections = [
    {
      title: "Job title",
      items: ["CEO", "CTO", "VP Engineering", "VP Sales", "VP Marketing", "Director"],
    },
    {
      title: "Management Level",
      items: [
        "C-Level",
        "VP",
        "Director",
        "Manager",
        "Senior Individual Contributor",
      ],
    },
    {
      title: "Department",
      items: [
        "Engineering",
        "Sales",
        "Marketing",
        "Operations",
        "Finance",
        "Human Resources",
      ],
    },
    {
      title: "Location",
      items: [
        "United States",
        "Canada",
        "United Kingdom",
        "Germany",
        "France",
        "Australia",
      ],
    },
    {
      title: "Industry",
      items: [
        "Technology",
        "Healthcare",
        "Financial Services",
        "Manufacturing",
        "Retail",
        "Education",
      ],
    },
    {
      title: "Skills",
      items: ["Google Ads experience", "B2B Sales", "SaaS", "Cloud Computing"],
    },
    {
      title: "Company location",
      items: [
        "San Francisco",
        "New York",
        "Seattle",
        "Austin",
        "Boston",
        "Chicago",
      ],
    },
    {
      title: "Size",
      items: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000"],
    },
    {
      title: "Revenue",
      items: [
        "$1M - $10M",
        "$10M - $50M",
        "$50M - $100M",
        "$100M - $500M",
        "$500M+",
      ],
    },
    {
      title: "Specialties",
      items: ["SaaS", "B2B", "Enterprise", "Startups", "Mid-market"],
    },
    {
      title: "Founder",
      items: ["Founders only", "Co-founders"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex h-screen overflow-hidden bg-white">
        {/* Left Sidebar - Filters */}
        <div className="w-56 border-r border-valasys-gray-200 overflow-y-auto bg-valasys-gray-50 flex flex-col">
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Search Filters Header */}
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-valasys-gray-500 uppercase tracking-wider">
                Search filters
              </h2>
            </div>

            {/* Filter Sections */}
            {filterSections.map((section) => (
              <FilterSection key={section.title} title={section.title} items={section.items} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-valasys-gray-200 bg-white flex gap-2">
            <Button className="flex-1 bg-valasys-orange hover:bg-orange-600 text-white rounded-lg h-9 text-sm font-medium transition-colors">
              Search
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-9 text-sm font-medium border border-valasys-gray-300 text-valasys-gray-700 hover:bg-valasys-gray-50 rounded-lg"
            >
              Reset filters
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-3xl mx-auto px-8 py-12">
            {/* Header Section with Gradient Blob */}
            <div className="relative mb-12">
              {/* Gradient Blob */}
              <div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #FF6B9D 0%, #E65D9F 100%)",
                  top: "-20px",
                  right: "-40px",
                }}
              />

              {/* Main Heading */}
              <div className="relative z-10">
                <h1 className="text-4xl font-bold text-valasys-gray-900 mb-2 text-center leading-tight">
                  Find your next prospects faster
                </h1>
                <p className="text-lg text-valasys-gray-600 text-center">
                  with the{" "}
                  <span className="font-semibold text-valasys-orange">power of AI</span>
                  <Zap className="inline ml-1.5 w-5 h-5 text-valasys-orange stroke-2" />
                </p>
              </div>
            </div>

            {/* Search Bar Section */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-valasys-gray-400" />
                <Input
                  type="text"
                  placeholder="Marketing specialists in Canada with Google Ads experience"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-16 py-3 border border-valasys-gray-300 rounded-lg text-sm placeholder:text-valasys-gray-400 focus:outline-none focus:ring-2 focus:ring-valasys-orange focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-valasys-gray-600 bg-white px-2 py-1">
                  0/10
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="border-b border-valasys-gray-200 rounded-none bg-transparent p-0 h-auto w-full justify-start gap-8">
                <TabsTrigger
                  value="saved"
                  className="rounded-none border-b-2 border-transparent px-0 py-3 font-medium text-sm text-valasys-gray-600 hover:text-valasys-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange data-[state=active]:text-valasys-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <span className="text-sm">★</span>
                    </div>
                    Saved searches
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="rounded-none border-b-2 border-transparent px-0 py-3 font-medium text-sm text-valasys-gray-600 hover:text-valasys-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange data-[state=active]:text-valasys-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Recent searches
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Saved Searches Tab */}
              <TabsContent value="saved" className="mt-6 pb-8">
                <div className="text-center py-12">
                  <p className="text-valasys-gray-500">No saved searches yet</p>
                </div>
              </TabsContent>

              {/* Recent Searches Tab */}
              <TabsContent value="recent" className="mt-6 pb-8">
                <div className="space-y-3">
                  {recentSearches.map((search) => (
                    <button
                      key={search.id}
                      className="w-full p-4 rounded-lg border border-valasys-gray-200 hover:border-valasys-orange hover:bg-valasys-gray-50 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-valasys-gray-900 font-medium leading-snug">
                            {search.query}
                          </p>
                          <p className="text-xs text-valasys-gray-500 mt-2">
                            {search.date}, {search.time}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-valasys-gray-400 group-hover:text-valasys-orange transition-colors flex-shrink-0 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-sm text-valasys-orange font-medium hover:text-orange-600 transition-colors">
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
