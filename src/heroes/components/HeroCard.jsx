import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego == characters) return <></>
  return <p>{characters}</p>
}

export const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img animate__animated animate__backInDown" src={`/assets/heroes/${id}.jpg`} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {<CharactersByHero alter_ego={alter_ego} characters={characters} />}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={`/hero/${id}`} >detail..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
