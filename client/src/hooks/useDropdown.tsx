import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
type DropdownProps = {
  isOpen: boolean; //Estado que evalua si el desplegable esta abierto o no
  setIsOpen: Dispatch<SetStateAction<boolean>>; //Seteo de estado que maneja el despliegue
  element: HTMLDivElement | null; //Elemento al que se le hace el despligue
};

// Maneja el la apertura y cierre de un elemento desplegable tanto al recibir un valor por prop como por el tamaño actual de la pantalla
export const useDropdown = ({ isOpen, setIsOpen, element }: DropdownProps) => {
  //estado en el que almacena el ancho de la pantalla actual
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  // Mide la altura del contenido a desplegar
  let height: string;
  if (element) height = element.scrollHeight + "px";

  // Efecto para abrir/cerrar el desplegable con su altura real para animar su apertura/cierre
  useEffect(() => {
    if (element) {
      if (isOpen) {
        element.style.height = height;
      } else {
        element.style.height = "0px";
      }
    }
  }, [isOpen]);

  //Efecto para actualizar el valor del estado widthScreen y manejar la apertura y cierre del desplegable segun el ancho de la pantalla
  useEffect(() => {
    //Funcion que setea el ancho actual de la pantalla en el estado
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    // Registra la funcion para que se ejecute cada vez que se redimensione la ventana del navegador
    window.addEventListener("resize", handleResize);

    //Si el tamaño de la pantalla es igual al de una tablet (md) el elemento se despliega
    if (widthScreen >= 768 && element) {
      element.style.height = height;
    }
    //De lo contrario lo contrae y setea el estado que maneja el desplegable desplegable como falso
    if (widthScreen < 768 && element) {
      element.style.height = "0px";
      setIsOpen(false);
    }
    //Remueve el evento para salvar memoria
    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);
};
