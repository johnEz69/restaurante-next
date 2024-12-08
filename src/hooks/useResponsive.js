import { useState, useEffect } from 'react';

// Hook para obtener el tamaño de la ventana (Cada componente tendra sus posibles medidas)
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Manejador para cambios de tamaño (Actualiza segun el tamaño de la pagina)
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Agregar evento de resize
    window.addEventListener('resize', handleResize);
    
    // Llamar una vez inicialmente
    handleResize();

    // Limpiar el evento al desmontar
  }, []);

  return windowSize;
};

// Hook para manejar diferentes breakpoints
export const useBreakpoint = () => {
  const { width } = useWindowSize();

  if (width < 550) return 'sm';
  if (width < 1080) return 'md';
  if (width >= 1080) return 'lg';
};

// Hook para controlar visibilidad de elementos
export const useResponsiveVisibility = () => {
  const breakpoint = useBreakpoint();

  return {
    showMobileMenu: ['sm'].includes(breakpoint),
    showDesktopMenu: ['md', 'lg'].includes(breakpoint)
  };
};

// Hook para controlar tamaño de logo
export const useResponsiveScale = (baseSize = 50) => {
  const breakpoint = useBreakpoint();

  const logoSizes = {
    'sm': baseSize * 0.4,
    'md': baseSize * 0.7,
    'lg': baseSize
  };

  return logoSizes[breakpoint];
};
