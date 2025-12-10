import React from 'react';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-6">
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LOGO CON ENLACE (Te lleva al inicio) */}
        <a href="/" className="text-2xl font-bold text-white tracking-wider cursor-pointer hover:scale-105 transition-transform">
          CONSTRUC<span className="text-yellow-500">TOR</span>
        </a>

        {/* MENÚ DE ESCRITORIO */}
        <ul className="hidden md:flex gap-8">
          {['Inicio', 'Nosotros', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
            <li key={item}>
              <a 
                /* Lógica Inteligente: Si es Inicio va a "/", si no va a la sección con "/#" */
                href={item === 'Inicio' ? '/' : `/#${item.toLowerCase()}`}
                className="text-sm font-semibold text-white/90 hover:text-yellow-500 transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de Menú Móvil (Solo visual por ahora) */}
        <button className="md:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  );
};
