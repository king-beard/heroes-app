import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => heroes.filter( h => h.publisher == publisher);