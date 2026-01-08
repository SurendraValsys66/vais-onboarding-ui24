import React, { useState } from "react";
import { ChevronRight, Zap, RotateCcw, ArrowUpRight, Search } from "lucide-react";
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

interface SavedSearch {
  id: string;
  name: string;
  filters: Record<string, string[]>;
}

const FilterSection = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; description?: string }[];
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <h3 className="text-sm font-semibold text-valasys-gray-900 flex items-center gap-2">
          <span className="flex-1 text-left">{title}</span>
        </h3>
        <ChevronRight
          className={cn(
            "w-4 h-4 text-valasys-gray-400 transition-transform",
            expanded && "rotate-90"
          )}
        />
      </button>

      {expanded && (
        <div className="space-y-2">
          {items.map((item) => (
            <label key={item.label} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-valasys-gray-300 text-valasys-orange cursor-pointer"
              />
              <span className="text-sm text-valasys-gray-700">{item.label}</span>
              {item.description && (
                <span className="text-xs text-valasys-gray-500">{item.description}</span>
              )}
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

  const savedSearches: SavedSearch[] = [
    {
      id: "1",
      name: "Tech CTOs - US",
      filters: {
        jobTitle: ["CTO"],
        location: ["United States"],
        industry: ["Technology"],
      },
    },
    {
      id: "2",
      name: "Sales VPs - Europe",
      filters: {
        jobTitle: ["VP Sales"],
        location: ["Europe"],
      },
    },
  ];

  const filterSections = [
    {
      title: "Job title",
      items: [
        { label: "CEO" },
        { label: "CTO" },
        { label: "VP Engineering" },
        { label: "VP Sales" },
        { label: "VP Marketing" },
        { label: "Manager" },
      ],
    },
    {
      title: "Management Level",
      items: [
        { label: "C-Level" },
        { label: "VP" },
        { label: "Director" },
        { label: "Manager" },
        { label: "Senior Individual Contributor" },
      ],
    },
    {
      title: "Department",
      items: [
        { label: "Engineering" },
        { label: "Sales" },
        { label: "Marketing" },
        { label: "Operations" },
        { label: "Finance" },
      ],
    },
    {
      title: "Location",
      items: [
        { label: "United States" },
        { label: "Canada" },
        { label: "United Kingdom" },
        { label: "Germany" },
        { label: "France" },
      ],
    },
    {
      title: "Industry",
      items: [
        { label: "Technology" },
        { label: "Healthcare" },
        { label: "Financial Services" },
        { label: "Manufacturing" },
      ],
    },
    {
      title: "Skills",
      items: [
        { label: "Google Ads experience" },
        { label: "B2B Sales" },
        { label: "SaaS" },
        { label: "Cloud Computing" },
      ],
    },
    {
      title: "Company location",
      items: [
        { label: "San Francisco" },
        { label: "New York" },
        { label: "Seattle" },
        { label: "Austin" },
      ],
    },
    {
      title: "Size",
      items: [
        { label: "1-10" },
        { label: "11-50" },
        { label: "51-200" },
        { label: "201-500" },
      ],
    },
    {
      title: "Revenue",
      items: [
        { label: "$1M - $10M" },
        { label: "$10M - $50M" },
        { label: "$50M - $100M" },
        { label: "$100M+" },
      ],
    },
    {
      title: "Specialties",
      items: [
        { label: "SaaS" },
        { label: "B2B" },
        { label: "Enterprise" },
        { label: "Startups" },
      ],
    },
    {
      title: "Founder",
      items: [
        { label: "Founders only" },
        { label: "Co-founders" },
      ],
    },
  ];

  const GradientBlob = () => (
    <div
      className="absolute w-32 h-32 rounded-full blur-3xl opacity-50"
      style={{
        background: "linear-gradient(135deg, #FF6B9D 0%, #E65D9F 100%)",
        top: "40px",
        right: "20px",
      }}
    />
  );

  return (
    <DashboardLayout>
      <div className="flex h-screen overflow-hidden bg-white">
        {/* Left Sidebar */}
        <div className="w-56 border-r border-valasys-gray-200 overflow-y-auto bg-valasys-gray-50">
          <div className="p-4">
            <h2 className="text-xs font-semibold text-valasys-gray-500 uppercase tracking-wide mb-4">
              Search filters
            </h2>

            {/* Filter sections */}
            {filterSections.map((section) => (
              <FilterSection key={section.title} {...section} />
            ))}

            {/* Action buttons */}
            <div className="flex gap-2 mt-8 pt-4 border-t border-valasys-gray-200">
              <Button
                className="flex-1 bg-valasys-orange hover:bg-orange-600 text-white rounded-lg h-9 text-sm font-medium"
              >
                Search
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-9 text-sm font-medium border-valasys-gray-300"
              >
                Reset filters
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-16">
            {/* Gradient blob decoration */}
            <div className="relative mb-16">
              <GradientBlob />

              {/* Main heading */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-valasys-gray-900 mb-3">
                  Find your next prospects faster
                </h1>
                <p className="text-lg text-valasys-gray-600">
                  with the <span className="font-semibold text-valasys-orange">power of AI</span>
                  <Zap className="inline ml-2 w-5 h-5 text-valasys-orange" />
                </p>
              </div>

              {/* Search input */}
              <div className="relative mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-3 w-5 h-5 text-valasys-gray-400" />
                  <Input
                    type="text"
                    placeholder="Marketing specialists in Canada with Google Ads experience"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border border-valasys-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-valasys-orange"
                  />
                  <Button
                    size="sm"
                    className="absolute right-2 top-2 h-8 px-3 bg-white border border-valasys-gray-300 text-valasys-gray-700 hover:bg-valasys-gray-50 rounded-md"
                  >
                    0/10
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs for Saved and Recent searches */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="border-b border-valasys-gray-200 rounded-none bg-transparent p-0 w-full justify-start">
                <TabsTrigger
                  value="saved"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange rounded-none border-b-2 border-transparent px-0 py-3 mr-8"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Save className="w-4 h-4" />
                    Saved searches
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-valasys-orange rounded-none border-b-2 border-transparent px-0 py-3"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <RotateCcw className="w-4 h-4" />
                    Recent searches
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Saved searches tab */}
              <TabsContent value="saved" className="mt-6">
                {savedSearches.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-valasys-gray-500">No saved searches yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {savedSearches.map((search) => (
                      <button
                        key={search.id}
                        className="w-full p-4 rounded-lg border border-valasys-gray-200 hover:border-valasys-orange hover:bg-valasys-gray-50 transition-colors text-left group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-valasys-gray-900 text-sm">
                              {search.name}
                            </h4>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-valasys-gray-400 group-hover:text-valasys-orange transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Recent searches tab */}
              <TabsContent value="recent" className="mt-6">
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <button
                      key={search.id}
                      className="w-full p-4 rounded-lg border border-valasys-gray-200 hover:border-valasys-orange hover:bg-valasys-gray-50 transition-colors text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-valasys-gray-900">{search.query}</p>
                          <p className="text-xs text-valasys-gray-500 mt-1">
                            {search.date}, {search.time}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-valasys-gray-400 group-hover:text-valasys-orange transition-colors flex-shrink-0 ml-3" />
                      </div>
                    </button>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-sm text-valasys-orange font-medium hover:text-orange-600">
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

// Import Save icon from lucide-react (add to imports if not present)
import { Save } from "lucide-react";
