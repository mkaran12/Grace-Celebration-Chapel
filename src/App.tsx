import React, { useState } from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Ministries from './components/Ministries';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Giving from './components/Giving';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'ministries':
        return <Ministries />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      case 'giving':
        return <Giving />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main className="pt-20">
        {renderSection()}
      </main>

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;