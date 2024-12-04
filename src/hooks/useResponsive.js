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

  if (width < 576) return 'xs';
  if (width < 768) return 'sm';
  if (width < 992) return 'md';
  if (width < 1200) return 'lg';
  return 'xl';
};

// Hook para controlar visibilidad de elementos
export const useResponsiveVisibility = () => {
  const breakpoint = useBreakpoint();

  return {
    showMobileMenu: ['xs', 'sm'].includes(breakpoint),
    showDesktopMenu: ['md', 'lg', 'xl'].includes(breakpoint)
  };
};

// // Hook para controlar tamaño de logo
// export const useResponsiveLogo = (baseSize = 50) => {
//   const breakpoint = useBreakpoint();

//   const logoSizes = {
//     'xs': baseSize * 0.6,
//     'sm': baseSize * 0.8,
//     'md': baseSize,
//     'lg': baseSize * 1.2,
//     'xl': baseSize * 1.5
//   };

//   return logoSizes[breakpoint];
// };
