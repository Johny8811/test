import { IPeopleResponse } from '@/types/people';
import { PEOPLE_URL } from './constants';

export const getPeopleData = async (searchTerm?: string): Promise<IPeopleResponse> => {
  const data = await fetch(`${PEOPLE_URL}${searchTerm ? `?search=${searchTerm}` : ''}`);
  return data.json();
};
