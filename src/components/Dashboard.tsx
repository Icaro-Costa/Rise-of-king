import { RankingTable } from "./RankingTable";

export function Dashboard() {
    return (
        <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium">Total Forts</h3>
                    <p className="text-3xl font-bold text-white mt-2">1,234</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium">Active Players</h3>
                    <p className="text-3xl font-bold text-white mt-2">85</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium">Average Level</h3>
                    <p className="text-3xl font-bold text-white mt-2">5.2</p>
                </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">Ranking</h2>
                </div>
                <RankingTable />
            </div>
        </div>
    );
}
