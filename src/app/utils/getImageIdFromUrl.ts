import { IPeople } from '@/types/people';

export const getImageIdFromUrl = (people: IPeople[]) =>
  people.map((person) => {
    const urlParts = person.url.split('/');
    return urlParts[urlParts.length - 2];
  });
