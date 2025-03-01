import { Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { DCPage, MarvelPage } from "../heroes/pages"
import { LoginPage } from "../auth/pages"

export const RouterApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={ <Navigate to="/marvel" /> } />

        <Route path="login" element={ <LoginPage /> } />

        <Route path="dc" element={ <DCPage /> } />
        <Route path="marvel" element={ <MarvelPage /> } />
      </Routes>
    </Fragment>
  )
}
