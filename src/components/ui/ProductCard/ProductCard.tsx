import * as React from "react";
import { IProduct } from "../../Menu/MenuTypes";
import { IContextProps } from "../../../reducers/contextTypes";

// images //
import big_burger from "../../../images/burgers/big.jpg";
import small_burger from "../../../images/burgers/small.jpg";
import Cheese from "../../../images/filling/cheese.jpg";
import Potato from "../../../images/filling/potato.jpg";
import Salad from "../../../images/filling/salad.jpg";
import Seasoning from "../../../images/supplements/Seasoning.jpg";
import Mayo from "../../../images/supplements/mayo.jpeg";
import { MenuContext } from "../../../reducers/context";

function findImage(name: string) {
  switch (name) {
    case "Big": {
      return big_burger;
    }
    case "Small": {
      return small_burger;
    }
    case "Cheese": {
      return Cheese;
    }
    case "Potato": {
      return Potato;
    }
    case "Salad": {
      return Salad;
    }
    case "Seasoning": {
      return Seasoning;
    }
    case "Mayo": {
      return Mayo;
    }
  }
}

const ProductCard = ({ product }: { product: IProduct }) => {
  const { dispatch } = React.useContext(MenuContext);
  return (
    <div className="card">
      <div>
        <img
          src={findImage(product.name)}
          alt={product.name}
          className=" h-[100px]"
        />
      </div>
      <button
        onClick={() =>
          dispatch({ type: `CHOOSE_${product.type}`, payload: product.name })
        }
      >
        Choose
      </button>
      {product.type !== 'BURGER' && <button
        onClick={() =>
          dispatch({ type: `DELETE_${product.type}`, payload: product.name })
        }
      >
        Delete
      </button>}
    </div>
  );
};

export default ProductCard;
