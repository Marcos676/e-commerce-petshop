export const replaceClass = (
    element: HTMLElement | null,
    oldClass: string,
    newClass: string,
  ) => {
    if (element) {
      element.classList.remove(oldClass);
      element.classList.add(newClass);
    }
  };