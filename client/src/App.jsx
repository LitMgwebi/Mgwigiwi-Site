import Home from "./pages/Home/Home";
import FineArtIndex from "./pages/Portfolio/Fine/FineArtIndex";
import BackgroundIndex from "./pages/Portfolio/Background/BackgroundIndex";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/fine-art" element={<FineArtIndex />} />
          <Route path="/background" element={<BackgroundIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
