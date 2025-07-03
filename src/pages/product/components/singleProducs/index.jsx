import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../../globalComponents/Container";
import {
  setCountReset,
  setCountValue,
} from "../../../../service/redux/feature/counterSlice";
import { FeaturedProductsData } from "../../../home/components/featuredProducts/featuredData";
import CheckoutCount from "./CheckoutCount";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import SingleProductCta from "./SingleProductCta";

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
    description,
  } = singleProduct;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const relatedProducts = FeaturedProductsData.filter(
    (product) =>
      product.pCategory.toLowerCase() ===
        singleProduct.pCategory.toLowerCase() && product.id !== singleProduct.id
  );

  useEffect(() => {
    const cartItems = cart.find((item) => item.id === singleProduct.id);
    if (cartItems) {
      dispatch(setCountValue(cartItems.qty));
    } else {
      dispatch(setCountReset());
    }
  }, [dispatch, singleProduct.id]);

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
            <CheckoutCount singleProduct={singleProduct} />
          </div>
          <div className="mt-[48px]">
            <ProductDescription description={description} />
          </div>
          <div className="mt-[48px]">
            <RelatedProducts relatedProducts={relatedProducts} />
          </div>
          <div className="mt-[48px]">
            <SingleProductCta />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProducts;
