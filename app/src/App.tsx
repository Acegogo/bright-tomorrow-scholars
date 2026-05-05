import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ScrollToTopOnNavigate, BackToTopFAB } from './components/PageChrome';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import StoriesPage from './pages/StoriesPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopFAB />
      </div>
    </Router>
  );
}

export default App;
