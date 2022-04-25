import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Home from './pages/Home'

import Exhibitions from './pages/Exhibitions'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <GlobalStyles />


      <Router>
        <Header />
        <section className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Exhibitions />} />
            <Route path="/blog" element={<About />} />
            <Route path="/account" element={<Contact />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
