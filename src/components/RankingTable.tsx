import { Trophy, TrendingUp, TrendingDown, Minus, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankingTableProps {
    data: Array<{
        rank: number;
        name: string;
        score: number;
        leaderCount: number;
        memberCount: number;
        change: "up" | "down" | "neutral";
        trend: number;
    }>;
    onSort: (column: string) => void;
    sortColumn: string;
    sortDirection: "asc" | "desc";
}

export function RankingTable({ data, onSort, sortColumn, sortDirection }: RankingTableProps) {
    const maxScore = Math.max(...data.map(p => p.score));

    const renderSortIcon = (column: string) => {
        if (sortColumn !== column) return <ArrowUpDown className="w-3 h-3 opacity-50" />;
        return sortDirection === "asc" ? <ArrowUp className="w-3 h-3 text-indigo-400" /> : <ArrowDown className="w-3 h-3 text-indigo-400" />;
    };

    const getHeaderClass = (column: string) => {
        return cn(
            "p-6 cursor-pointer hover:text-white transition-colors select-none",
            sortColumn === column ? "text-white" : "text-slate-400"
        );
    };

    return (
        <div className="glass-card rounded-2xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-slate-400 font-medium uppercase tracking-wider text-xs">
                        <tr>
                            <th className={getHeaderClass("rank")} onClick={() => onSort("rank")}>
                                <div className="flex items-center gap-2">Rank {renderSortIcon("rank")}</div>
                            </th>
                            <th className={getHeaderClass("name")} onClick={() => onSort("name")}>
                                <div className="flex items-center gap-2">Commander {renderSortIcon("name")}</div>
                            </th>
                            <th className={cn(getHeaderClass("score"), "text-right")} onClick={() => onSort("score")}>
                                <div className="flex items-center justify-end gap-2">Score {renderSortIcon("score")}</div>
                            </th>
                            <th className={cn(getHeaderClass("leaderCount"), "text-right")} onClick={() => onSort("leaderCount")}>
                                <div className="flex items-center justify-end gap-2">Leader {renderSortIcon("leaderCount")}</div>
                            </th>
                            <th className={cn(getHeaderClass("memberCount"), "text-right")} onClick={() => onSort("memberCount")}>
                                <div className="flex items-center justify-end gap-2">Member {renderSortIcon("memberCount")}</div>
                            </th>
                            <th className="p-6 text-right">Trend</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {data.map((player) => (
                            <tr key={player.rank} className={cn(
                                "hover:bg-white/5 transition-colors group",
                                player.rank === 1 ? "bg-yellow-500/5 hover:bg-yellow-500/10" :
                                    player.rank === 2 ? "bg-slate-300/5 hover:bg-slate-300/10" :
                                        player.rank === 3 ? "bg-orange-700/5 hover:bg-orange-700/10" : ""
                            )}>
                                <td className="p-6 text-white font-medium">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center font-bold relative",
                                        player.rank === 1 ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" :
                                            player.rank === 2 ? "bg-slate-300/20 text-slate-300 border border-slate-300/30" :
                                                player.rank === 3 ? "bg-orange-700/20 text-orange-500 border border-orange-700/30" :
                                                    "bg-white/5 text-slate-400"
                                    )}>
                                        {player.rank === 1 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />}
                                        {player.rank <= 3 ? <Trophy className="w-4 h-4 text-inherit" /> : `#${player.rank}`}
                                    </div>
                                </td>
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-500">
                                            {player.name.charAt(0)}
                                        </div>
                                        <span className={cn(
                                            "font-medium transition-colors",
                                            player.rank === 1 ? "text-yellow-500" : "text-slate-200 group-hover:text-white"
                                        )}>{player.name}</span>
                                    </div>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-slate-200 font-mono tracking-wide font-bold">{player.score.toLocaleString()}</span>
                                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full",
                                                    player.rank === 1 ? "bg-yellow-500" :
                                                        player.rank === 2 ? "bg-slate-300" :
                                                            player.rank === 3 ? "bg-orange-500" : "bg-indigo-500"
                                                )}
                                                style={{ width: `${(player.score / maxScore) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 text-right text-slate-300 font-mono">{player.leaderCount}</td>
                                <td className="p-6 text-right text-slate-300 font-mono">{player.memberCount}</td>
                                <td className="p-6 text-right">
                                    <div className={cn(
                                        "flex items-center justify-end gap-1 font-medium",
                                        player.change === "up" ? "text-emerald-400" :
                                            player.change === "down" ? "text-red-400" : "text-slate-500"
                                    )}>
                                        {player.change === "up" && <TrendingUp className="w-4 h-4" />}
                                        {player.change === "down" && <TrendingDown className="w-4 h-4" />}
                                        {player.change === "neutral" && <Minus className="w-4 h-4" />}
                                        <span>{player.change === "neutral" ? "-" : `${player.trend}%`}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
