import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ranches from "./pages/Ranches"
import Jobs from "./pages/Jobs"
import RanchShow from "./pages/RanchShow"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}> 
        <Route index element={<Home />} /> 
        <Route path='about' element={<About />} />
        <Route path='ranches' element={<Ranches />} />
        <Route path='ranch' element={<RanchShow />} />
        <Route path='jobs' element={<Jobs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
