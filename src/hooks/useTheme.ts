"use client"
import React, { useEffect, useState } from 'react'

const useTheme = () => {
    const [tema, setTema] = useState('light');

    useEffect(() => {
      // Función que revisa si la clase 'dark' está presente en <html>
      const checkTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        const nuevoTema = isDark ? 'dark' : 'light';
        setTema(nuevoTema);
        console.log('Tema actual:', nuevoTema); // Log para ver el tema actual
      };
  
      // Crear el observer para detectar cambios en el atributo 'class' de <html>
      const observer = new MutationObserver(() => {
        checkTheme();  // Verifica y actualiza el tema cuando cambia la clase
      });
  
      // Configuración del observer: observar el atributo 'class' de <html>
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'], // Solo observar cambios en el atributo 'class'
      });
  
      // Verificar el tema inicial cuando el componente se monta
      checkTheme();
  
      // Limpiar el observer cuando el componente se desmonte
      return () => observer.disconnect();
    }, []); // Solo ejecutar una vez al montar el componente
  
  
}

export default useTheme