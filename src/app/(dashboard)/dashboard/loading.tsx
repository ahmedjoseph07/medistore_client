import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <Loader2 className="h-10 w-10 animate-spin text-green-600" />

                {/* Text */}
                <h2 className="text-lg font-semibold">
                    Loading MediStore
                </h2>

                {/* Skeleton Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-2xl">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-24 rounded-xl bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}