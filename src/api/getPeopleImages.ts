import { PEOPLE_IMAGES_URL } from './constants';

export const getPeopleImages = async (id: string) => {
  const data = await fetch(`${PEOPLE_IMAGES_URL}/${id}.jpg`);
  return data.blob();
};
