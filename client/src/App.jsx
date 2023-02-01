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

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import useLocalStorage from "use-local-storage" 

import { useAuthContext } from "./hooks/useAuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const {user} = useAuthContext();
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light'
      ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Header theme={switchTheme} imgIcon={theme}/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/fine-art" element={<FineArtIndex />} />
          <Route path="/portfolio/background" element={<BackgroundIndex />} />

          <Route path="/portfolio/concept" element={<ConceptIndex />} />
          <Route path="/portfolio/concept/add" element={user? <ConceptAdd /> : <Navigate to="/portfolio/concept"/>} />
          <Route path="/portfolio/concept/:id" element={<ConceptRecord />} />

          <Route path="/portfolio/character-design" element={<CharacterDesignIndex />} />
          <Route path="/portfolio/character-design/add" element={user? <CharacterDesignAdd /> : <Navigate to="/portfolio/character-design"/>} />
          <Route path="/portfolio/character-design/:id" element={<CharacterDesignRecord />} />

          <Route path="/portfolio/animation" element={<AnimationIndex />} />
          <Route path="/portfolio/animation/add" element={user ?<AnimationAdd /> : <Navigate to="/portfolio/animation"/>} />
          <Route path="/portfolio/animation/:id" element={<AnimationRecord />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
