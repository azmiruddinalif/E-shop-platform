import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ProductCard from "../../../../globalComponents/productCards";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5 lg:mb-0">
          <h3 className="font-poppins text-lg md:text-[36px] font-semibold text-black01">
            Related Products
          </h3>
          <Link
            to="/product"
            className="flex items-center gap-x-2 font-montserrat font-bold text-sm lg:text-base text-orange group"
          >
            View All
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <HiArrowLongRight size={24} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-4 gap-y-10 mt-[30px]">
          {relatedProducts?.slice(0, 4)?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product?.image}
              ratings={product.ratings}
              pCategory={product.pCategory}
              pName={product.pName}
              totalRatings={product.totalRatings}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
