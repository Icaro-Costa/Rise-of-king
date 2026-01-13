"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function UploadArea() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        // Handle file drop here
        console.log("Files dropped:", e.dataTransfer.files);
    };

    return (
        <div
            className={cn(
                "border-2 border-dashed rounded-lg p-12 text-center transition-colors",
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="text-gray-600">
                <p className="font-medium">Drag and drop files here</p>
                <p className="text-sm mt-2">or click to select files</p>
            </div>
            <input type="file" className="hidden" />
        </div>
    );
}
