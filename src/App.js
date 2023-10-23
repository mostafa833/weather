import { Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponents from './features/home';
import SignIn from "./features/signIn";
import SignUp from "./features/signUp";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomeComponents />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
    
  );
}

export default App;

