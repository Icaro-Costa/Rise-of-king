export function RankingTable() {
    const rankings = [
        { rank: 1, name: "Player 1", score: 1000 },
        { rank: 2, name: "Player 2", score: 950 },
        { rank: 3, name: "Player 3", score: 900 },
        { rank: 4, name: "Player 4", score: 850 },
        { rank: 5, name: "Player 5", score: 800 },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-gray-400">
                    <tr>
                        <th className="p-4 font-medium">Rank</th>
                        <th className="p-4 font-medium">Name</th>
                        <th className="p-4 font-medium text-right">Score</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                    {rankings.map((player) => (
                        <tr key={player.rank} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 text-white font-medium">#{player.rank}</td>
                            <td className="p-4 text-gray-300">{player.name}</td>
                            <td className="p-4 text-gray-300 text-right">{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
