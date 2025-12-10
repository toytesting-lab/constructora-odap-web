import React from 'react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      
      {/* Imagen de Fondo (Alta Calidad) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construcción en obra" 
          className="w-full h-full object-cover"
        />
        {/* Filtro oscuro para que se lea bien el texto */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido Central */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Ingeniería que <span className="text-yellow-500">Perdura</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
          Especialistas en obras civiles y conectividad. Transformamos planos en realidades sólidas con los más altos estándares.
        </p>

        {/* BOTONES DE ACCIÓN (Aquí está la magia) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          {/* Botón 1: Ver Proyectos -> Baja a la sección de obras */}
          <a 
            href="#proyectos" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg uppercase tracking-wide cursor-pointer"
          >
            Ver Proyectos
          </a>

          {/* Botón 2: Contáctanos -> Baja al formulario */}
          <a 
            href="#contacto" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg uppercase tracking-wide cursor-pointer"
          >
            Contáctanos
          </a>

        </div>
      </div>
    </section>
  );
};
