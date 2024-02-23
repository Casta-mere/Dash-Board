import React from "react";

interface Props {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug && slug.map((str) => str + " ")}</div>;
};

export default ProductPage;
