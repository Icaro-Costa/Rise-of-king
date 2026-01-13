import { UploadArea } from "@/components/UploadArea";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <main className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-xl mx-auto py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Area</h1>
                    <Link href="/dashboard" className="text-blue-600 hover:underline text-sm">
                        &larr; Back to Dashboard
                    </Link>
                </div>

                <UploadArea />

                <div className="mt-8 text-center text-xs text-gray-400">
                    Logged in as {session.user?.name}
                </div>
            </div>
        </main>
    );
}
