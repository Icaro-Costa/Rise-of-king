import { UploadArea } from "@/components/UploadArea";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogOut, LayoutDashboard, Settings } from "lucide-react";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <main className="min-h-screen bg-slate-950 p-6 font-sans relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto py-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 glass-header p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                            <Settings className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">Admin Control Panel</h1>
                            <p className="text-slate-400 text-sm">Manage data and configuration</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0 w-full md:w-auto">
                        <Link
                            href="/dashboard"
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 text-sm font-medium"
                        >
                            <LayoutDashboard className="w-4 h-4" />
                            View Dashboard
                        </Link>
                        {/* Note: Logout functionality would typically require a client component or form action */}
                        <Link
                            href="/api/auth/signout"
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors border border-red-500/20 text-sm font-medium"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </Link>
                    </div>
                </header>

                <div className="glass-card rounded-2xl p-8 border border-white/10">
                    <div className="mb-8 border-b border-white/5 pb-6">
                        <h2 className="text-xl font-bold text-white mb-2">Data Management</h2>
                        <p className="text-slate-400 text-sm">Upload Excel spreadsheets to update the leaderboard.</p>
                    </div>

                    <UploadArea />

                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 bg-black/20 py-2 rounded-lg border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        Logged in as <span className="text-slate-300 font-medium">{session.user?.name}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
