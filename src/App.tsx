import Grid from './components/Grid';
import Hero from './components/Hero';

import React from 'react';
import RecentProjects from './components/RecentProjects';
import Experience from './components/Experience';
import Clients from './components/Clients';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import { FloatingNav } from './components/ui/FloatingNav';
import { navItems } from './data';
// import { Stars } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';




const App = () => {
  return (
    <main>
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <Experience />
      <Clients />
      <WorkExperience />
      <Contact />
        
      
    </main>
  )
}

export default App
