"use client";

import { useState, useMemo } from "react";
import TransactionTable from "../components/TransactionTable";
import FilterButtons from "../components/FilterButtons";
import { mockTransactions } from "../data/mockTransactions";
import { FilterStatus } from "../types/transaction";

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");

  // Filter transactions based on selected status
  const filteredTransactions = useMemo(() => {
    if (activeFilter === "All") {
      return mockTransactions;
    }
    return mockTransactions.filter((txn) => txn.status === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-600">
            View and filter your transaction history
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-6">
          {/* <h2 className="text-sm font-medium text-gray-700 mb-3">
            Filter by Status
          </h2> */}
          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Transaction Table */}
        <TransactionTable transactions={filteredTransactions} />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredTransactions.length} transaction
            {filteredTransactions.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
