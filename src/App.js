import Home from './home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio.jsx';
import YouthWork from './youthWork.jsx';
import InternationalWeek from './internationalWeek.jsx';
import ReadingGuidePersonalProject from './readingGuidePersonalProject.jsx';
import ReadingGuideGroupProject from './readingGuideGroupProject.jsx';
import ReadingGuideInternationalProject from './readingGuideInternationalProject.jsx';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/youthwork" element={<YouthWork />} />
        <Route path="/internationalWeek" element={<InternationalWeek/>}/>
        <Route path="/reading-guide-personal-project" element={<ReadingGuidePersonalProject/>}/>
        <Route path="/reading-guide-group-project" element={<ReadingGuideGroupProject/>}/>
        <Route path="/reading-guide-international-project" element={<ReadingGuideInternationalProject/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
