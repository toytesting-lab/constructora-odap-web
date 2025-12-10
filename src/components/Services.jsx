import React from 'react';

const services = [
  {
    title: "Edificación en Altura",
    description: "Desarrollo integral de edificios habitacionales y de oficinas con los más altos estándares sísmicos.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "Obras Civiles y Viales",
    description: "Pavimentación, puentes y movimiento de tierras. Conectamos ciudades con infraestructura duradera.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" /></svg>
    )
  },
  {
    title: "Proyectos Industriales",
    description: "Galpones, centros de distribución y plantas productivas diseñadas para la eficiencia operativa.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    title: "Arriendo de Maquinaria",
    description: "Flota moderna de maquinaria pesada disponible para faenas externas con operadores certificados.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">
            Nuestras Especialidades
          </h2>
          <h3 className="text-4xl font-bold">
            Soluciones Integrales
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors border border-gray-700 hover:border-yellow-500 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
