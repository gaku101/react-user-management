import { memo } from "react"
import { Route, Routes } from "react-router-dom"
import { Page404 } from "../components/Page404"
import { Login } from "../components/pages/Login"
import { homeRoutes } from "./HomeRoutes"

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home'>
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.children} />
        ))}
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
})
