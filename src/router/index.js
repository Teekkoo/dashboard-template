import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import rotas from "./data"

import Login from "../pages/Login"
import TrocarSenha from "../pages/SistemTrocarSenha"
import BasePainel from "../base/painel"
import Inicio from "../pages/Inicio"

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Navigate
              to={rotas.login}
              replace
            />
          }
        />
        <Route
          path={rotas.login}
          element={<Login />}
        />
        <Route
          path={rotas.base}
          element={<Login />}
        />
        <Route
          path={rotas.trocarSenha}
          element={<TrocarSenha />}
        />
        <Route
          path={rotas.painel}
          element={<BasePainel />}>
          <Route
            index
            element={<Inicio />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
