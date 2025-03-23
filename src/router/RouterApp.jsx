import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { HeroesRoutes } from "../heroes/routes"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const RouterApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="login" element={ 
          <PublicRouter> 
            <LoginPage />
          </PublicRouter> 
        } />
        <Route path="/*" element={ 
          <PrivateRouter> 
            <HeroesRoutes />
          </PrivateRouter> 
        } />
      </Routes>
    </Fragment>
  )
}
