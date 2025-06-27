import { useSelector } from "react-redux";
import ProductCardList from "../../../../globalComponents/ProductCardList";
import ProductCard from "../../../../globalComponents/productCards";
import { FeaturedProductsData } from "../../../home/components/featuredProducts/featuredData";

const ShowcaseBody = () => {
  const viewMode = useSelector((state) => state.view.mode);
  return (
    <div className="mt-[48px]">
      {viewMode == "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-5 gap-y-10 mt-[30px]">
          {FeaturedProductsData?.slice(0, 20)?.map((product) => (
            <ProductCard
              key={product.id}
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
      ) : (
        FeaturedProductsData?.slice(0, 20)?.map((product) => (
          <ProductCardList
            key={product.id}
            image={product?.image}
            ratings={product.ratings}
            pCategory={product.pCategory}
            pName={product.pName}
            totalRatings={product.totalRatings}
            price={product.price}
            discount={product.discount}
          />
        ))
      )}
    </div>
  );
};

export default ShowcaseBody;
