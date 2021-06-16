export enum AccountType {
  TRANSACTION = 'TRANSACTION',
  SAVINGS = 'SAVINGS',
}

export interface Account {
  account_id: string;
  account_type: AccountType;
  iban: string;
  swift_bic: string;
  sort_code: string;
  account_number: string;
  currency: string;
  available: number;
  current: number;
  update_timestamp: string;
}

export type TRANSACTION_STATUS = 'SUCCEEDED' | 'FAILED';

export type TRANSACTION_TYPE = 'CREDIT' | 'DEBIT';

export type TRANSACTION_CATEGORY =
  | 'CREDIT'
  | 'ATM'
  | 'BILL_PAYMENT'
  | 'PURCHASE';

export interface Transaction {
  timestamp: string;
  transaction_type: TRANSACTION_TYPE;
  transaction_category: TRANSACTION_CATEGORY;
  amount: number;
  currency: string;
  status: TRANSACTION_STATUS;
}
