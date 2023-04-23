import Home from './home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio.jsx';
import YouthWork from './youthWork.jsx';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/youthwork" element={<YouthWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
