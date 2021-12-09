import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/index';

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}
    />
    <Route path="/about" element={<h1>AboutPage</h1>} />
  </Routes>
  </BrowserRouter>  
);

export default App;