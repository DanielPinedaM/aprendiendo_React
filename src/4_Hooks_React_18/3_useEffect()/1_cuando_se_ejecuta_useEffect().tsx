/*
crear un cuadro comparativo para esto:

Cuando se ejecuta el useEffect?

Explicar los casos en q se ejecutan cada uno de estos useEffect:

useEffect(() => {
  console.log('render SIN array de dependencias')
}) // 

useEffect(() => {
  console.log('dependencias vacias [] (SIN dependencias)')
}, []) // 

useEffect(() => {
 console.log('CON [dependencia]')
}, [dependencia]) 


// usar dentro de use effect un return para ejecutar código DESPUES de desmontar el componente 
useEffect(() => { 
  function handleResize() { 
    // manejar el evento de cambio de tamaño 
  } 

  window.addEventListener('resize', handleResize); 

  return cleanup; 
}, []);
*/