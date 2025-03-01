import { getHeroesByPublisher } from "../helpers"

export const HeroesList = ({publisher}) => {
  const heroes = getHeroesByPublisher( publisher )

  return (
    <ul className="list-group">
      { heroes.map((hero) => <i className="list-item" key={hero.id}> {hero.superhero} </i>) }
    </ul>
  )
}
