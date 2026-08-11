import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = ({ onNavigate, onOpenProject }) => {
  return (
    <div className="home-page">
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} onOpenProject={onOpenProject} />
    </div>
  );
};

export default Home;
