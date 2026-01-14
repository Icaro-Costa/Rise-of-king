"use client";

import { useState } from "react";
import { UploadArea } from "./UploadArea";
import { RankingTable } from "./RankingTable";
import { SummaryCards } from "./SummaryCards";
import { FilterBar } from "./FilterBar";
import { EvolutionChart } from "./EvolutionChart";

// Mock Data
const MOCK_DATA = [
    { rank: 1, name: "Commander X", score: 12500, leaderCount: 45, memberCount: 120, change: "up" as const, trend: 12 },
    { rank: 2, name: "Warlord Y", score: 11200, leaderCount: 38, memberCount: 110, change: "up" as const, trend: 5 },
    { rank: 3, name: "Strategist Z", score: 10800, leaderCount: 42, memberCount: 95, change: "down" as const, trend: 2 },
    { rank: 4, name: "Vanguard A", score: 9500, leaderCount: 25, memberCount: 150, change: "neutral" as const, trend: 0 },
    { rank: 5, name: "Guardian B", score: 8900, leaderCount: 30, memberCount: 88, change: "up" as const, trend: 8 },
];

const MOCK_CHART_DATA = [
    { date: 'Day 1', score: 4000 },
    { date: 'Day 2', score: 3000 },
    { date: 'Day 3', score: 5000 },
    { date: 'Day 4', score: 4500 },
    { date: 'Day 5', score: 6000 },
    { date: 'Day 6', score: 7500 },
    { date: 'Day 7', score: 8200 },
];

export function Dashboard() {
    const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("weekly");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState("score");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    // Filter and Sort Logic
    const filteredData = MOCK_DATA.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
        // @ts-expect-error - dynamic sorting
        const valA = a[sortColumn];
        // @ts-expect-error - dynamic sorting
        const valB = b[sortColumn];

        if (sortDirection === "asc") return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
    });

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortDirection(prev => prev === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("desc");
        }
    };

    return (
        <div>
            <SummaryCards
                mvp={MOCK_DATA[0]}
                totalForts={1234}
                firepower={78}
                period={period}
            />

            <FilterBar
                period={period}
                onPeriodChange={setPeriod}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <EvolutionChart data={MOCK_CHART_DATA} />

            <RankingTable
                data={filteredData}
                onSort={handleSort}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
            />

            <div className="mt-12 pt-8 border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Data Management</h3>
                <UploadArea />
            </div>
        </div>
    );
}
