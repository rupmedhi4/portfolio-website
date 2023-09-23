import Header from "./components/Header/Header";
import './App.css'
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Skill from "./components/Skills/Skill";
import MyProject from "./components/MyProject/MyProject";
import ContactMe from "./components/ContactMe/ContactMe";
import Modal from "./components/Header/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
     <BrowserRouter>
     <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
     {isModalOpen ? <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> : null}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/myskills" element={<Skill/>} />
          <Route path="/myproject" element={<MyProject/>} />
          <Route path="/contactme" element={<ContactMe/>} />
         
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
