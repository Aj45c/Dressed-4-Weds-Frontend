import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Homepage} />
      </Routes>
    </Router>
  );
};

export default App;