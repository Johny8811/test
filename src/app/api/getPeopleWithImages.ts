import { getPeopleData } from '@/api/getPeopleData';
import { getImageIdFromUrl } from '@/app/utils/getImageIdFromUrl';
import { getPeopleImages } from '@/api/getPeopleImages';

export const getPeopleWithImages = async (params: { [key: string]: string | undefined }) => {
  const people = await getPeopleData(params.search?.toString());

  const imagesIds = getImageIdFromUrl(people.results);
  const images = await Promise.all(imagesIds.map((id) => getPeopleImages(id)));

  return people.results.map((person, index) => ({
    ...person,
    image: images[index],
  }));
};
