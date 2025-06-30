import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../../../../globalComponents/CustomPagination";
import ProductCardList from "../../../../globalComponents/ProductCardList";
import ProductCard from "../../../../globalComponents/productCards";
import { setRange } from "../../../../service/redux/feature/paginationSlice";
import { FeaturedProductsData } from "../../../home/components/featuredProducts/featuredData";

const ShowcaseBody = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const viewMode = useSelector((state) => state.view.mode);

  const StartIndex = (page - 1) * pageSize;
  const EndIndex = StartIndex + pageSize;
  const paginatedProducts = FeaturedProductsData.slice(StartIndex, EndIndex);

  useEffect(() => {
    dispatch(
      setRange({
        from: StartIndex + 1,
        to: Math.min(EndIndex, FeaturedProductsData.length),
        total: FeaturedProductsData.length,
      })
    );
  }, [page, dispatch]);

  return (
    <div className="mt-[48px]">
      {viewMode == "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-5 gap-y-10 mt-[30px]">
          {paginatedProducts?.map((product) => (
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
      ) : (
        paginatedProducts?.map((product) => (
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
      {FeaturedProductsData.length > pageSize && (
        <div>
          <CustomPagination
            current={page}
            total={FeaturedProductsData.length}
            onChange={setPage}
            pageSize={pageSize}
          />
        </div>
      )}
    </div>
  );
};

export default ShowcaseBody;
