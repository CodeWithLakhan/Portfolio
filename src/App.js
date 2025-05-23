import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectDetails from "./components/ProjectDetails";
import Achievements from './components/Achievements';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Wrapper><Skills /></Wrapper>} />
            <Route path="/achievements" element={<Wrapper><Achievements /></Wrapper>} />
            <Route path="/experience" element={<Wrapper><Experience /></Wrapper>} />
            <Route path="/projects" element={<Projects  openModal={openModal} setOpenModal={setOpenModal} />} />
            <Route path="/education" element={<Wrapper><Education /></Wrapper>} />
          </Routes>
        </Body>
        <Footer/>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Router>
    </ThemeProvider>
  );
}

export default App;
