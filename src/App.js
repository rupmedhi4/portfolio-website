import Header from "./components/Header/Header";
import './App.css'
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
