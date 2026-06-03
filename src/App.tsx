import React from 'react'
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Card from './components/Card';

import itcm1 from './assets/itcm1.jpg';
import itcm2 from './assets/itcm2.jpg';
import itcm3 from './assets/itcm3.jpg';
import itcm4 from './assets/itcm4.jpg';

export default function App() {
    const projects = [
        {
      title: "Gleerups portal",
      subtitle: "Educational platform",
      description: "Licensing and user management system, provisioning integrations.",
      linkText: "gleerupsportal.se",
      imageSrc: itcm1
    },
    {
      title: "Linea",
      subtitle: "E-commerce",
      description: "Interior design in four countries, e-commerce solution with CMS and business integration.",
      linkText: "lineahemma.se",
      imageSrc: itcm2
    },
    {
      title: "Knittingroom",
      subtitle: "E-commerce",
      description: "Needlework shop in four countries, e-commerce solution with CMS and business integration.",
      linkText: "knittingroom.se",
      imageSrc: itcm3
    },
    {
      title: "Åshild",
      subtitle: "E-commerce",
      description: "Womens clothing in four countries, e-commerce solution with CMS and business integration.",
      linkText: "ashild.se",
      imageSrc: itcm4
    }
  ];
   return (
    <div className="min-h-screen bg-white pb-32">
      <Header />
      <Info />

      <section className="max-w-7xl mx-auto px-8">
        {/* <h2 className="text-[22px] font-normal text-zinc-700 mb-10">
          Some things that we are proud of
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              linkText={project.linkText}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
