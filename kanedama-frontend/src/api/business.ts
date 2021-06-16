import { Business } from '../types/Business';
import { HttpResponse } from '../types/Http';
import { FR_GOVT_BASE_URL } from './constants';

const BUSINESS_ENDPOINTS = {
  BUSINESS_RESOURCE: '/unites_legales',
};

export const getBusiness = async (
  siren: string
): Promise<HttpResponse<Business>> => {
  try {
    const res = await fetch(
      `${FR_GOVT_BASE_URL}${BUSINESS_ENDPOINTS.BUSINESS_RESOURCE}/${siren}`
    );
    const result = await res.json();
    const { unite_legale } = result;

    return {
      response: unite_legale,
    };
  } catch (err) {
    return {
      error: err.toString(),
    };
  }
};
