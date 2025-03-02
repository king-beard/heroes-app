import { Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { Navbar } from "../../ui/components"

export const HeroesRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />} />

          <Route path="dc" element={<DCPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
        </Routes>
      </div>
    </Fragment>
  )
}
