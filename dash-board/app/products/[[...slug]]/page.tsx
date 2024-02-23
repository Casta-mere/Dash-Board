import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <>
      ProductPage {slug && slug.map((str) => str + " ")}{" "}
      {sortOrder && "sortOrder = " + sortOrder}
    </>
  );
};

export default ProductPage;
