import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from './views/Dashboard.jsx';
import ProblemLogger from './views/ProblemLogger.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/newProblem' element={<ProblemLogger />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
