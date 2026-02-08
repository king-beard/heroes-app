import { heroApi } from '../api/heo.api';

export const getHeroesByPage = async () => {
  const { data } = await heroApi.get(`/`);

  return data;
}