/* 
Tutorial Básico de <dialog>
https://www.youtube.com/watch?v=1x0TITmM4Wc&t=425s

CSS-Tricks (Trucos CSS)...
- JavaScript HTMLDialogElement. para la Etiqueta <dialog>
https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/

- Dar Estilos CSS a la Etiqueta <dialog>
https://css-tricks.com/how-to-implement-and-style-the-dialog-element/

- Ejemplos de <dialog>
https://css-tricks.com/some-hands-on-with-the-html-dialog-element/

- ¿Cuándo usar <dialog> ?
https://css-tricks.com/dialog-components-roll-your-own/

Documentación Oficial de…
- Etiqueta HTML <dialog>
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

- JavaScript HTMLDialogElement. para le Etiqueta <dialog>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
*/

/*
INCOMPLETO
PROGRAMAR ETIQUETA <dialog> CON REACT useState()
CERRAR VENTANA MODAL AL DAR CLICK FUERA DE LA VENTANA MODAL
USAR ETIQUETA <dialog> Y NO LIBERIAS

Recordatorio:
Del resumen de HTML 5 ver:
" 9) <dialog> Ventana Modal o Cuadro de Dialogo "
*/

export const Dialog = () => {
  return (
    <>
      <button type='button' onclick={}>
        Abrir
      </button>

      <dialog>
        <button type='button' onclick={}>
          X
        </button>
        hola mundo
      </dialog>
    </>
  );
};
