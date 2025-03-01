import { Fragment } from "react"
import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <Fragment>
      <h1>DC</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </Fragment>
  )
}
