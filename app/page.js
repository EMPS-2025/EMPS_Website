// app/page.js

"use client"; 

import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Journey from './components/Journey';
import Markets from './components/Markets';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

export default function HomePage() {
   useEffect(() => {
    // This is the animation logic we added in the previous step
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); 
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 
    });

    const elementsToAnimate = document.querySelectorAll('[data-animation]');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Markets />
      <Journey />
      <Clients />
      <Testimonial />
      <Contact />
    </>
  );
}
