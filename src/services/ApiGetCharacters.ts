import { IApiCharacters } from '../interfaces/Characters';

const BASE_URL = `https://swapi.dev/api`;

export default async function fetchGetCharacters(
  query: string,
  page: number,
): Promise<IApiCharacters> {
  try {
    const response = await fetch(
      `${BASE_URL}/people/?search=${query || ''}&page=${page || 1}`,
    );
    if (!response.ok) {
      throw new Error('Error loading data');
    }
    const characters = await response.json();
    return characters;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
