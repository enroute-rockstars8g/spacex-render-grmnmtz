import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DragonsPage } from './pages/dragons/component'
import { MissionsPage } from './pages/missions/component'
import { ShipsPage } from './pages/ships/component'
import { RocketsPage } from './pages/rockets/component'
import { NotFound } from './pages/notfound/component'
import './index.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/dragons" element={<DragonsPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/ships" element={<ShipsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
