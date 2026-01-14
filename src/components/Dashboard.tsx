import { RankingTable } from "./RankingTable";
import { Castle, Users, TrendingUp } from "lucide-react";

export function Dashboard() {
    return (
        <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                            <Castle className="w-6 h-6" />
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Forts</h3>
                    </div>
                    <p className="text-4xl font-bold text-white mt-2 tracking-tight">1,234</p>
                    <p className="text-xs text-indigo-400 mt-2 font-medium">+12% from last week</p>
                </div>

                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Active Players</h3>
                    </div>
                    <p className="text-4xl font-bold text-white mt-2 tracking-tight">85</p>
                    <p className="text-xs text-purple-400 mt-2 font-medium">+3 new members</p>
                </div>

                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:text-pink-300 transition-colors">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Average Level</h3>
                    </div>
                    <p className="text-4xl font-bold text-white mt-2 tracking-tight">5.2</p>
                    <p className="text-xs text-pink-400 mt-2 font-medium">Top 5% of alliances</p>
                </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border-white/5">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <div>
                        <h2 className="text-xl font-bold text-white">Live Ranking</h2>
                        <p className="text-slate-400 text-sm mt-1">Real-time performance tracking</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Live</span>
                    </div>
                </div>
                <RankingTable />
            </div>
        </div>
    );
}
