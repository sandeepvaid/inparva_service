import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import RecruitmentPage from './pages/RecruitmentPage';
import VirtualAssistantPage from './pages/VirtualAssistantPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import CallSchedulingPage from './pages/CallSchedulingPage';
import FloatingContactButtons from './components/FloatingContactButtons';
import Footer from './components/Footer';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop />
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
