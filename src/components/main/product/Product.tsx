import "./styles.css";
import { useEffect } from "react";
import Stars from './product.helpers'

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: { rate: number; count: number };
}

export default function Product({ product }: IProduct) {

  console.log(product);
  return (
    <div className="product-card">
      <div className="product__content">
        <h6 className="product__id">{product.id}</h6>
        <div className="product__img-wrapper">
          <img src={product.image} />
        </div>
        <h4 className="product__rate">{Stars(product.rating.rate)}{product.rating.rate}</h4>
        <h2 className="product__title">{product.title}</h2>
        <h1 className="product__price"><strong>{`${product.price}$`}</strong></h1>
      </div>
      <div className="product__buttons">
        <button className="product__button-buy">
          <p className="button-buy__title">Купити</p>
        </button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
