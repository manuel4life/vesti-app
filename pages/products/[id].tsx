import React from "react";
import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Product Detail for {id}</div>;
};

export default ProductDetailPage;
