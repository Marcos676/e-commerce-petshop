
type Props = {
  width: String;
  isFilterView: Boolean;
};

const PetList = ({ width, isFilterView }: Props) => {
  return (
    <ul className={"flex-wrap justify-around " + isFilterView? "hidden md:flex": "flex"}>
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