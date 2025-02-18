import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import GreenBeck from './pages/greenbeck.jsx';
import Experiment from './pages/experiment.jsx';


function App() {

  return (
    <>
      <Routes>
          <Route path="/greenbeck" element={<GreenBeck />} />
          <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </>
  )
}

export default App;
