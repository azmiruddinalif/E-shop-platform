import { useLocation } from "react-router-dom";
import { FeaturedProductsData } from "../../../home/components/featuredProducts/featuredData";

const SingleProducts = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(1)[1];

  const singleProduct = FeaturedProductsData.find((p) => p.id == id);
  console.log(singleProduct);

  return <div>SingleProducts</div>;
};

export default SingleProducts;
