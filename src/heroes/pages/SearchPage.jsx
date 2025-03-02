import { Fragment } from "react"
import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"

export const SearchPage = () => {

  const navigate = useNavigate()

  const { searchText, onInputChange } = useForm({ searchText : '' })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if(searchText.trim().length <= 1) return;

    navigate(`q=${searchText}`)
  }

  return (
    <Fragment>
      <h4>Search</h4>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="serach hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary btn-sm mt-1">search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          <div className="alert alert-info">search a hero</div>
          <div className="alert alert-danger">no hero with <b>ABC</b></div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </Fragment>
  )
}
