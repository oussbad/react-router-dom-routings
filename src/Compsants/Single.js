import { useParams ,Link } from "react-router-dom";
import Product from "./Product";

function Single(props) {
  const { id } = useParams();
  const produit =props.produits.find((p)=>p.id==id)

  return (
    <div>

      {
        <Product data={produit}></Product>
      }
      <Link to={"/"}>Allez vers Accuiel</Link>
    </div>
  );
}

export default Single;
