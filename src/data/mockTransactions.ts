import { Transaction } from "../types/transaction";



export const mockTransactions: Transaction[] = [
  {
    id: "TXN001",
    amount: 15000,
    status: "Success",
    date: "2026-01-08",
  },
  {
    id: "TXN002",
    amount: 45000,
    status: "Failed",
    date: "2026-01-07",
  },
  {
    id: "TXN003",
    amount: 8500,
    status: "Pending",
    date: "2026-01-07",
  },
  {
    id: "TXN004",
    amount: 120000,
    status: "Success",
    date: "2026-01-06",
  },
  {
    id: "TXN005",
    amount: 3200,
    status: "Success",
    date: "2026-01-06",
  },
  {
    id: "TXN006",
    amount: 67000,
    status: "Failed",
    date: "2026-01-05",
  },
  {
    id: "TXN007",
    amount: 25000,
    status: "Pending",
    date: "2026-01-05",
  },
  {
    id: "TXN008",
    amount: 92000,
    status: "Success",
    date: "2026-01-04",
  },
  {
    id: "TXN009",
    amount: 11500,
    status: "Pending",
    date: "2026-01-04",
  },
  {
    id: "TXN010",
    amount: 54000,
    status: "Failed",
    date: "2026-01-03",
  },
];
