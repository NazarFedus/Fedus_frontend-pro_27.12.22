import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./product/Product";

export default function Main({ activeValue }: string) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await axios.get(
        `https://fakestoreapi.com/products/category/${activeValue}`
      );
      setProducts(await data.data);
    }

    fetchProducts();
  }, [activeValue]);

  console.log(products);

  return (
    <div className="main__content">
      <div className="forcatalog"></div>
      <div className="content">
        {!products && <p>Loading...</p>}
        {products &&
          products.map((item) => (
            <Product product={item} key={item.id}></Product>
          ))}
      </div>
    </div>
  );
}
