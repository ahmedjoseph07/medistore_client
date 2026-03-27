"use client";

export default function AddStorePage() {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Add Store</h1>

            <form className="space-y-4 max-w-md">
                <input className="w-full border p-2 rounded" placeholder="Store Name" />
                <input className="w-full border p-2 rounded" placeholder="Location" />

                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                    Add Store
                </button>
            </form>
        </div>
    );
}