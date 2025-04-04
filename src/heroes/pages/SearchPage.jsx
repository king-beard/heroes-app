import { Fragment } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = (q.length == 0)
  const showError = (q.length > 0) && heroes.length == 0

  const { searchText, onInputChange } = useForm({ searchText: q })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <Fragment>
      <h4>Search</h4>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="serach hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-info animate__animated animate__fadeIn" style={{ display : showSearch ? '' : 'none' }}>
            search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display : showError ? '' : 'none' }}>
            no hero with <b>{q}</b>
          </div>

          {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
        </div>
      </div>
    </Fragment>
  )
}
