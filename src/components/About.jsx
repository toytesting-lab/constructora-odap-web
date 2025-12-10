import React from 'react';

export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div>
            <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">
              Sobre Nosotros
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Más que construir, creamos legados.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Somos una empresa de ingeniería dedicada a la ejecución de obras civiles de alta complejidad. 
              Nuestra misión es entregar infraestructura segura, eficiente y sostenible, integrando 
              tecnología de punta en cada proceso.
            </p>
            
            {/* Lista de puntos clave */}
            <ul className="space-y-4">
              {['Certificación ISO 9001', 'Equipo Multidisciplinario', 'Compromiso con la Seguridad'].map((item) => (
                <li key={item} className="flex items-center text-gray-700 font-medium">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de Imagen/Estadísticas */}
          <div className="relative">
            {/* Imagen principal */}
            <img 
              src="https://images.unsplash.com/photo-1581094794329-cd2803d5a552?q=80&w=2070&auto=format&fit=crop" 
              alt="Ingeniero supervisando obra" 
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            
            {/* Cuadro flotante de estadísticas */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900 p-8 rounded shadow-2xl hidden md:block">
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500">15+</div>
                  <div className="text-xs text-white uppercase mt-1">Años de Exp.</div>
                </div>
                <div className="border-l border-gray-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500">200+</div>
                  <div className="text-xs text-white uppercase mt-1">Proyectos</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
