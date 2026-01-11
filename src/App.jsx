import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RecruitmentPage from './pages/RecruitmentPage';
import VirtualAssistantPage from './pages/VirtualAssistantPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import CallSchedulingPage from './pages/CallSchedulingPage';
import FloatingContactButtons from './components/FloatingContactButtons';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <FloatingContactButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/virtual-assistant" element={<VirtualAssistantPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/schedule-call" element={<CallSchedulingPage />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
