import Header from "./components/Header/Header";
import './App.css'
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Skill from "./components/Skills/Skill";
import MyProject from "./components/MyProject/MyProject";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/myskills" element={<Skill/>} />
          <Route path="/myproject" element={<MyProject/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
