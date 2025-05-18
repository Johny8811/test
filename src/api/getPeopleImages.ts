export const getPeopleImages = async (id: string) => {
  const data = await fetch(`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`);
  return data.blob();
};
