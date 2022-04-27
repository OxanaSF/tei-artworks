import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import styled from "styled-components";

import Home from './components/Main/Home'
import Exhibitions from './pages/Exhibitions'
import About from './pages/About'
import Contact from './pages/Contact'




function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <AppWrapperStyled className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppWrapperStyled>
      </Router>
    </>
  );
}


const AppWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  margin: auto;
`

export default App;
