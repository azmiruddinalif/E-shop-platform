import { Link, useLocation } from "react-router-dom";
import Container from "../../../../globalComponents/Container";
import { FeaturedProductsData } from "../../../home/components/featuredProducts/featuredData";
import CheckoutCount from "./CheckoutCount";
import ProductDetails from "./ProductDetails";

const SingleProducts = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(1)[1];

  const singleProduct = FeaturedProductsData.find((p) => p.id == id);
  const {
    pCategory,
    brand,
    pName,
    image,
    totalRatings,
    ratings,
    price,
    discount,
    size,
    weight,
    delivery,
    variant,
  } = singleProduct;
  console.log(singleProduct);

  return (
    <>
      <Container>
        <div className="mt-20">
          <div className="flex items-center gap-x-4 font-montserrat text-black01">
            <Link to="/">Home</Link>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{pCategory}</span>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{brand}</span>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span className="font-bold">{pName}</span>
          </div>
          <div className="mt-[48px]">
            <ProductDetails
              pName={pName}
              image={image}
              totalRatings={totalRatings}
              ratings={ratings}
              price={price}
              discount={discount}
              brand={brand}
              size={size}
              weight={weight}
              delivery={delivery}
              variant={variant}
            />
          </div>
          <div className="mt-[48px]">
            <CheckoutCount />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProducts;
