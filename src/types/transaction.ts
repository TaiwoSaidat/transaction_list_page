export type TransactionStatus = "Success" | "Failed" | "Pending";

export interface Transaction {
  id: string;
  amount: number;
  status: TransactionStatus;
  date: string;
}

export type FilterStatus = "All" | TransactionStatus;
