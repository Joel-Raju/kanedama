import { HttpResponse } from '../types/Http';
import { User } from '../types/User';
import { USER_BASE_URL } from './constants';

export const getAccounts = async (): Promise<HttpResponse<User>> => {
  try {
    const res = await fetch(`${USER_BASE_URL}`);
    const data = await res.json();
    const [user] = data.results;

    return {
      response: user,
    };
  } catch (err) {
    return {
      error: err.toString(),
    };
  }
};
