"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { UploadCloud, FileSpreadsheet, Loader2 } from "lucide-react";

export function UploadArea() {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        // Simulate upload
        setIsUploading(true);
        console.log("Files dropped:", e.dataTransfer.files);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsUploading(false);
    };

    return (
        <div
            className={cn(
                "relative group cursor-pointer transition-all duration-300 rounded-3xl border-2 border-dashed p-12 text-center overflow-hidden",
                isDragging
                    ? "border-indigo-500 bg-indigo-500/10 scale-[1.02]"
                    : "border-white/10 hover:border-indigo-500/50 hover:bg-white/5",
                isUploading && "pointer-events-none opacity-50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className={cn(
                    "p-4 rounded-2xl transition-all duration-300 shadow-xl",
                    isDragging ? "bg-indigo-500 shadow-indigo-500/20 text-white" : "bg-white/5 text-slate-400 group-hover:bg-indigo-500 group-hover:text-white"
                )}>
                    {isUploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <UploadCloud className="w-8 h-8" />}
                </div>

                <div className="space-y-1">
                    <p className="text-lg font-medium text-white">
                        {isUploading ? "Processing..." : "Drop your Excel file here"}
                    </p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        Support for .xlsx, .xls
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><FileSpreadsheet className="w-3 h-3" /> Data.xlsx</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span>Max 50MB</span>
                </div>
            </div>

            <input type="file" className="hidden" accept=".xlsx,.xls" />
        </div>
    );
}
