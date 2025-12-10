import React from 'react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">
            Hablemos
          </h2>
          <h3 className="text-4xl font-bold text-white">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Estamos listos para evaluar tus requerimientos y entregarte una propuesta técnica a la medida de tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="space-y-8">
            
            {/* Ítem 1: Dirección */}
            <div className="flex items-start">
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">Oficina Central</h4>
                <p className="text-gray-400 mt-1">
                  Simón Bolívar 229<br/>
                  (Ref: Estación Hospital)<br/>
                  Viña del Mar, Chile
                </p>
              </div>
            </div>

            {/* Ítem 2: Email */}
            <div className="flex items-start">
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">Email</h4>
                <p className="text-gray-400 mt-1">contacto@constructora-odap.cl</p>
              </div>
            </div>

            {/* Ítem 3: Teléfono */}
            <div className="flex items-start">
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">Teléfono</h4>
                <p className="text-gray-400 mt-1">+56 9 1234 5678</p>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario */}
          <form 
            name="contacto" 
            method="POST" 
            data-netlify="true" 
            action="/exito"
            className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-2xl"
          >
            {/* Campos Ocultos */}
            <input type="hidden" name="form-name" value="contacto" />
            <input type="hidden" name="subject" value="Nuevo Cliente desde la Web - Constructora ODAP" />

            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Nombre Completo</label>
              <input type="text" name="nombre" required className="w-full bg-gray-900 border border-gray-600 rounded py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Ej: Juan Pérez" />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Email Corporativo</label>
              <input type="email" name="email" required className="w-full bg-gray-900 border border-gray-600 rounded py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="juan@empresa.cl" />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Mensaje</label>
              <textarea name="mensaje" required className="w-full bg-gray-900 border border-gray-600 rounded py-3 px-4 text-white h-32 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded hover:bg-yellow-400 transition-colors uppercase tracking-wide">
              Enviar Mensaje
            </button>
          </form>

        </div>

        {/* --- MAPA DE UBICACIÓN (Enlace Corregido) --- */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <h4 className="text-2xl font-bold text-white mb-8 text-center">Nuestra Ubicación</h4>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
            
            {/* Iframe con dirección REAL de Google Maps */}
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?q=Simon+Bolivar+229,+Vina+del+Mar&hl=es&z=15&output=embed"
              className="absolute inset-0 filter grayscale hover:grayscale-0 transition-all duration-500"
              title="Mapa Ubicación Constructora ODAP"
            ></iframe>
            
            {/* Capa amarilla transparente encima */}
            <div className="absolute inset-0 bg-yellow-500/10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
