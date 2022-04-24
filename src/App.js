import { Servidor, Client } from './pages'
import { Routes, Route } from "react-router-dom";
import React from 'react';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Servidor />} />
      <Route path="client" element={<Client />} />
    </Routes>
  )
}

export default App