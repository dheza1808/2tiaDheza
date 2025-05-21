import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4 md:mb-0 md:flex-1"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded md:w-1/3 lg:w-1/4"
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md bg-white h-full flex flex-col"
          >
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 flex-grow">{item.description}</p>
            {item.details && (
              <div className="mt-3">
                {item.details.officialWebsite && (
                  <p className="text-blue-600 text-sm">
                    <strong>Website:</strong>{" "}
                    <a 
                      href={item.details.officialWebsite} 
                      className="hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {item.details.officialWebsite}
                    </a>
                  </p>
                )}
                {item.details.developer && (
                  <p className="text-green-600 text-sm mt-1">
                    <strong>Developer:</strong> {item.details.developer}
                  </p>
                )}
              </div>
            )}
            
            <div className="mt-3 flex flex-wrap">
              {item.tags && item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {filteredFrameworks.length === 0 && (
        <div className="text-center p-8 text-gray-500">
          No frameworks found matching your criteria.
        </div>
      )}
    </div>
  );
}
