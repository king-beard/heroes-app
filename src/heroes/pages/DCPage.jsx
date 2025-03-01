import { Fragment } from "react"
import { HeroesList } from "../components"

export const DCPage = () => {
  return (
    <Fragment>
      <h1>DCPage</h1>
      <hr />

      <HeroesList publisher="DC Comics" />
    </Fragment>
  )
}
