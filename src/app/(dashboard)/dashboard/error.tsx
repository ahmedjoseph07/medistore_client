"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <AlertTriangle className="h-12 w-12 text-red-500" />
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800">
                    Something went wrong
                </h1>

                {/* Message */}
                <p className="text-gray-600 mt-2">
                    We couldn't load Medistore properly. Please try again.
                </p>

                {/* Error (optional in dev) */}
                {process.env.NODE_ENV === "development" && (
                    <pre className="mt-4 text-xs text-red-400 bg-gray-100 p-2 rounded">
                        {error.message}
                    </pre>
                )}

                {/* Actions */}
                <div className="mt-6 flex gap-3 justify-center">
                    <Button onClick={() => reset()}>
                        Try Again
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => (window.location.href = "/")}
                    >
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}