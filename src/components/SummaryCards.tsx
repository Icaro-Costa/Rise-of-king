import { Crown, Zap, Activity } from "lucide-react";

interface SummaryCardsProps {
    mvp: {
        name: string;
        score: number;
    };
    totalForts: number;
    firepower: number;
    period: "daily" | "weekly" | "monthly";
}

export function SummaryCards({ mvp, totalForts, firepower, period }: SummaryCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* MVP Card */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Crown className="w-24 h-24 text-yellow-500 transform rotate-12" />
                </div>
                <div className="flex items-start justify-between relative z-10">
                    <div>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">MVP ({period})</p>
                        <h3 className="text-2xl font-bold text-white mt-1">{mvp.name}</h3>
                        <p className="text-yellow-500 font-mono text-lg mt-1">{mvp.score.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                        <Crown className="w-6 h-6 text-yellow-500" />
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-emerald-400 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> Top Performer
                    </span>
                </div>
            </div>

            {/* Total Activity Card */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24 text-blue-500 transform -rotate-12" />
                </div>
                <div className="flex items-start justify-between relative z-10">
                    <div>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Forts</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{totalForts.toLocaleString()}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                </div>
                <div className="mt-4 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="mt-2 text-xs text-slate-500">Alliance Activity</p>
            </div>

            {/* Firepower Card */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity className="w-24 h-24 text-purple-500" />
                </div>
                <div className="flex items-start justify-between relative z-10">
                    <div>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Lvl 3 Forts Rate</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{firepower}%</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                        <Activity className="w-6 h-6 text-purple-500" />
                    </div>
                </div>
                <div className="mt-4 flex items-end gap-2 h-8">
                    {[40, 65, 50, 80, 60, 90, firepower].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-sm ${i === 6 ? 'bg-purple-500' : 'bg-white/10'}`} style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">Efficiency Trend</p>
            </div>
        </div>
    );
}
