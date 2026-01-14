import { Search, Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
    period: "daily" | "weekly" | "monthly";
    onPeriodChange: (p: "daily" | "weekly" | "monthly") => void;
    searchQuery: string;
    onSearchChange: (q: string) => void;
}

export function FilterBar({ period, onPeriodChange, searchQuery, onSearchChange }: FilterBarProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="flex items-center gap-2 bg-black/20 p-1 rounded-xl border border-white/5">
                {(["daily", "weekly", "monthly"] as const).map((p) => (
                    <button
                        key={p}
                        onClick={() => onPeriodChange(p)}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize",
                            period === p
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                {period === "daily" && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-white/20 transition-all text-sm">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Today</span>
                        <ChevronDown className="w-3 h-3 opacity-50" />
                    </button>
                )}

                <div className="relative group w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search commander..."
                        className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                    />
                </div>
            </div>
        </div>
    );
}
