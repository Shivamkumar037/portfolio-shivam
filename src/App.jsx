import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import './index.css';
import Certificates from "./pages/Certificates";

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page !== 'project-detail') {
      setSelectedProjectId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProject = (id) => {
    setSelectedProjectId(id);
    setActivePage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onOpenProject={openProject} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'projects':
        return (
          <Projects onNavigate={handleNavigate} onOpenProject={openProject} />
        );
      case 'skills':
        return <Skills onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'experience':
        return (
          <Experience
            onNavigate={handleNavigate}
            onOpenProject={openProject}
          />
        );
      case 'project-detail':
        return (
          <ProjectDetail
            projectId={selectedProjectId}
            onNavigate={handleNavigate}
          />
        );
      case 'certificate':
        return (
         <Certificates></Certificates>
        );
      default:
        return <Home onNavigate={handleNavigate} onOpenProject={openProject} />;
    }
  };

  // Keep bottom nav highlighting "projects" when on detail
  const navActive =
    activePage === 'project-detail' ? 'projects' : activePage;

  return (
    <div className="app">
      <Navbar activePage={navActive} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <BottomNav activePage={navActive} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
