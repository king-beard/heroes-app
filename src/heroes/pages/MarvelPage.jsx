import { Fragment } from "react"
import { HeroesList } from "../components"

export const MarvelPage = () => {
  return (
    <Fragment>
      <h1>DCPage</h1>
      <hr />

      <HeroesList publisher="Marvel Comics" />
    </Fragment>
  )
}
