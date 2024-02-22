import React from "react";
import AddToCart from "../AddToCart";
import style from "./ProducCard.module.css";

const ProductCard = () => {
  return (
    <div className={style.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
