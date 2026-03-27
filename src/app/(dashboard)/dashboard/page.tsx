export default function DashboardPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-xl shadow">Total Stores</div>
                <div className="p-4 bg-white rounded-xl shadow">Total Medicines</div>
                <div className="p-4 bg-white rounded-xl shadow">Orders</div>
                <div className="p-4 bg-white rounded-xl shadow">Revenue</div>
            </div>
        </div>
    );
}