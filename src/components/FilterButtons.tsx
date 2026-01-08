import { FilterStatus } from "../types/transaction";

interface FilterButtonsProps {
  activeFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

const filters: FilterStatus[] = ["All", "Success", "Failed", "Pending"];

export default function FilterButtons({
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
