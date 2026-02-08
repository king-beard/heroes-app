import { heroApi } from '../api/heo.api';

export const getHeroesByPageAction = async () => {
  const { data } = await heroApi.get(`/`);

  return data;
}