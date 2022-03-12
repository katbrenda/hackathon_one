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
import Ranch from "./components/Ranch"
import RanchForm from './pages/RanchForm'
import DataProvider from './providers/DataProvider';


ReactDOM.render(
  <DataProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}> 
        <Route index element={<Home />} /> 
        <Route path='about' element={<About />} />
        <Route path='ranches' element={<Ranches />} />
        <Route path='ranches/:id' element={<RanchShow />} />
        <Route path='ranches/new' element={<RanchForm />} />
        <Route path='jobs' element={<Jobs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </DataProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
