import { Dashboard } from "@/components/Dashboard";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function DashboardPage() {
    return (
        <main className="min-h-screen p-6 font-sans selection:bg-indigo-500/30">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/5">
                    <div>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight">
                            Fort Tracker
                        </h1>
                        <p className="text-slate-400 mt-2 text-sm tracking-wide uppercase font-medium">Alliance Performance Dashboard</p>
                    </div>
                    <Link
                        href="/admin"
                        className="mt-4 md:mt-0 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white hover:border-indigo-500/50"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Admin Access
                    </Link>
                </header>

                <Dashboard />
            </div>
        </main>
    );
}
