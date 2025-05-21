import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
		                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
		                <p className="text-gray-600">{item.description}</p>
                        {item.details && (
                        <>
                            {item.details.officialWebsite && (
                                <p className="text-blue-600 mt-2">
                                    <strong>Website:</strong> {item.details.officialWebsite}
                                </p>
                            )}
                            {item.details.developer && (
                                <p className="text-green-600">
                                    <strong>Developer:</strong> {item.details.developer}
                                </p>
                            )}
                            {item.tags.map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {tag}
                                </span>
                            ))}
                        </>
                    )}
		            </div>
            ))}
        </div>
    )
}