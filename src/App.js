import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Pages/Home';
import {Favs} from './Pages/Favs';
import {Profile} from './Pages/Profile';
import {Navigation} from './Navigation/Navigation';


function App() {
  return (
    <>
       <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favs/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
