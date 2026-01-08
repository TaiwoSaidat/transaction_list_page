// src/components/StatusBadge.tsx

import { TransactionStatus } from "../types/transaction";

interface StatusBadgeProps {
  status: TransactionStatus;
}

const statusStyles: Record<TransactionStatus, string> = {
  Success: 'bg-green-100 text-green-800 border-green-300',
  Failed: 'bg-red-100 text-red-800 border-red-300',
  Pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}