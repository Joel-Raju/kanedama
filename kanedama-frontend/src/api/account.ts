import { Account, Transaction } from '../types/Account';
import { HttpResponse } from '../types/Http';
import { MANSA_BASE_URL } from './constants';

const ACCOUNT_ENDPOINTS = {
  ACCOUNTS: '/accounts',
  TRANSACTIONS: '/transactions',
};

export const getAccounts = async (): Promise<HttpResponse<Account[]>> => {
  try {
    const res = await fetch(`${MANSA_BASE_URL}${ACCOUNT_ENDPOINTS.ACCOUNTS}`);

    const result: Account[] = await res.json();

    return {
      response: result,
    };
  } catch (err) {
    return {
      error: err.toString(),
    };
  }
};

export const getTransactionsForAccount = async (
  accountId: string,
  startDate: string,
  endDate: string
): Promise<HttpResponse<Transaction[]>> => {
  try {
    const res = await fetch(
      `${MANSA_BASE_URL}${ACCOUNT_ENDPOINTS.ACCOUNTS}${accountId}${ACCOUNT_ENDPOINTS.TRANSACTIONS}?from=${startDate}&to=${endDate}`
    );

    const result: Transaction[] = await res.json();

    return {
      response: result,
    };
  } catch (err) {
    return {
      error: err.toString(),
    };
  }
};
