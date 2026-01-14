import { Medal, Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function RankingTable() {
    const rankings = [
        { rank: 1, name: "Commander X", score: 12500, change: "up", trend: 12 },
        { rank: 2, name: "Warlord Y", score: 11200, change: "up", trend: 5 },
        { rank: 3, name: "Strategist Z", score: 10800, change: "down", trend: 2 },
        { rank: 4, name: "Vanguard A", score: 9500, change: "neutral", trend: 0 },
        { rank: 5, name: "Guardian B", score: 8900, change: "up", trend: 8 },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-slate-400 font-medium uppercase tracking-wider text-xs">
                    <tr>
                        <th className="p-6">Rank</th>
                        <th className="p-6">Commander</th>
                        <th className="p-6 text-right">Score</th>
                        <th className="p-6 text-right">Trend</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {rankings.map((player) => (
                        <tr key={player.rank} className="hover:bg-white/5 transition-colors group">
                            <td className="p-6 text-white font-medium">
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center font-bold relative",
                                    player.rank === 1 ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" :
                                        player.rank === 2 ? "bg-slate-300/20 text-slate-300 border border-slate-300/30" :
                                            player.rank === 3 ? "bg-orange-700/20 text-orange-500 border border-orange-700/30" :
                                                "bg-white/5 text-slate-400"
                                )}>
                                    {player.rank === 1 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />}
                                    {player.rank <= 3 ? <Trophy className="w-4 h-4" /> : `#${player.rank}`}
                                </div>
                            </td>
                            <td className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-500">
                                        {player.name.charAt(0)}
                                    </div>
                                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{player.name}</span>
                                </div>
                            </td>
                            <td className="p-6 text-slate-300 text-right font-mono tracking-wide">{player.score.toLocaleString()}</td>
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
    );
}
