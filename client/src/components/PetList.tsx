
type Props = {
  width: String;
  isFilterView: Boolean;
};

const PetList = ({ width, isFilterView }: Props) => {
  return (
    <ul
      className={
        (isFilterView? "hidden md:flex" : "flex") + " flex-wrap justify-around"}
    >
      {["Perro", "Gato", "Pez", "Roedor", "Ave", "Reptil"].map(
        (tipo, index) => (
          <li key={index} className={"inline " + width}>
            <img
              className="max-w-full h-auto object-contain"
              src={`images/categorias/icono${tipo}.png`}
              alt={tipo}
            />
          </li>
        ),
      )}
    </ul>
  );
};
export default PetList;