import "./app.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/homepage';
import DetailPage from './pages/detailpages/detailpages';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details" element={<DetailPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;