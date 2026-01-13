import { Dashboard } from "@/components/Dashboard";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-slate-950 p-6 font-sans selection:bg-blue-500/30">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-800">
                    <div>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
                            Rastreador de Fortes
                        </h1>
                        <p className="text-gray-400 mt-2">Painel de Performance da Aliança</p>
                    </div>
                </header>

                <Dashboard />
            </div>
        </main>
    );
}
