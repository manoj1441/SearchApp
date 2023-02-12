import "./styles.css";
import Home from "./Home"
import SingleMovie from "./SingleMovie"
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
 <Route path="/" element={<Home />}  />
 <Route path="movie/:id" element={<SingleMovie />}  />

    </Routes>
    </BrowserRouter>
    </div>
  );
}
