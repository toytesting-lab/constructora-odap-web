import React from 'react';

const projects = [
  {
    title: "Edificio Vista Mar",
    category: "Habitacional",
    location: "Viña del Mar",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=735&auto=format&fit=crop"
  },
  {
    title: "Puente Conectividad Sur",
    category: "Vialidad",
    location: "Concepción",
    image: "https://images.unsplash.com/photo-1513828583688-601bf760b1ca?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Centro Logístico Norte",
    category: "Industrial",
    location: "Antofagasta",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Condominio Los Robles",
    category: "Habitacional",
    location: "Temuco",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1167&auto=format&fit=crop"
  },
  {
    title: "Hospital Regional",
    category: "Salud / Público",
    location: "Rancagua",
    image: "https://images.unsplash.com/photo-1587352316972-e1d848737c38?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Pavimentación Ruta 5",
    category: "Vialidad",
    location: "La Serena",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop"
  }
];

export const Projects = ({ showButton = true }) => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">
            Portafolio
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            Obras Destacadas
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hemos dejado nuestra huella en proyectos de gran envergadura a lo largo de todo Chile.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80">
              {/* Imagen con Zoom al hacer Hover */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay oscuro (Gradiente) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              
              {/* Texto flotante */}
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h4>
                <div className="flex items-center text-gray-300 text-sm mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más (Con Condicional) */}
        {showButton && (
          <div className="text-center mt-12">
            <a href="/proyectos" className="inline-block border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded hover:bg-gray-900 hover:text-white transition-colors">
              Ver Todos los Proyectos
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
