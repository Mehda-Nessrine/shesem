import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import SandSituation from './Components/SandSituation.jsx';
import Advice from './Components/Advice.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sand-situation" element={<SandSituation />} />
        <Route path="/advice" element={<Advice />} />
      </Routes>
    </Router>
  );
};

export default App;