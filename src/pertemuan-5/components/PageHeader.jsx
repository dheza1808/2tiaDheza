export default function PageHeader({ children }) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex flex-col">
                <span className="text-3xl font-semibold">Dashboard</span>
                <div className="flex items-center font-medium space-x-2 mt-2">
                    <span className="text-gray-500">Dashboard</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500">Order List</span>
                </div>
            </div>

            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}
