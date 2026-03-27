"use client";

export default function AddMedicinePage() {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Add Medicine</h1>

            <form className="space-y-4 max-w-md">
                <input className="w-full border p-2 rounded" placeholder="Medicine Name" />
                <input className="w-full border p-2 rounded" placeholder="Price" />

                <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Add Medicine
                </button>
            </form>
        </div>
    );
}