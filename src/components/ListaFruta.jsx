
const ListaFrutas = () => {
  const frutas = ["🍉", "🍌", "🍎"];

  <ul>
        {frutas.map((fruta, index) => {
          return (
            <li key={index}>
              {index} - {fruta}
            </li>
          );
        })}
</ul>
}

export default ListaFrutas;