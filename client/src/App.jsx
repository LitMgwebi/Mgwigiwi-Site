import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

import FineArtIndex from "./pages/Portfolio/Fine/FineArtIndex";
import BackgroundIndex from "./pages/Portfolio/Digital/Background/BackgroundIndex";

import CharacterDesignIndex from "./pages/Portfolio/Digital/CharacterDesign/CharacterDesignIndex";
import CharacterDesignAdd from "./pages/Portfolio/Digital/CharacterDesign/CharacterDesignAdd";
import CharacterDesignRecord from "./pages/Portfolio/Digital/CharacterDesign/CharacterDesignRecord";

import ConceptIndex from "./pages/Portfolio/Digital/Concept/ConceptIndex";
import ConceptAdd from "./pages/Portfolio/Digital/Concept/ConceptAdd";
import ConceptRecord from "./pages/Portfolio/Digital/Concept/ConceptRecord";

import AnimationIndex from "./pages/Portfolio/Animation/AnimationIndex";
import AnimationAdd from "./pages/Portfolio/Animation/AnimationAdd";
import AnimationRecord from "./pages/Portfolio/Animation/AnimationRecord";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div id="Routes">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/fine-art" element={<FineArtIndex />} />
            <Route path="/portfolio/background" element={<BackgroundIndex />} />

            <Route path="/portfolio/concept" element={<ConceptIndex />} />
            <Route path="/portfolio/concept/add" element={<ConceptAdd />} />
            <Route path="/portfolio/concept/:id" element={<ConceptRecord />} />

            <Route path="/portfolio/character-design" element={<CharacterDesignIndex />} />
            <Route path="/portfolio/character-design/add" element={<CharacterDesignAdd />} />
            <Route path="/portfolio/character-design/:id" element={<CharacterDesignRecord />} />

            <Route path="/portfolio/animation" element={<AnimationIndex />} />
            <Route path="/portfolio/animation/add" element={<AnimationAdd />} />
            <Route path="/portfolio/animation/:id" element={<AnimationRecord />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
