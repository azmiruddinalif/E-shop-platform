import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NextButton from "../../../../globalComponents/NextButton";
import PrevButton from "../../../../globalComponents/PrevButton";
import SpringProductCard from "./SpringProductCard";
import { SpringSaleData } from "./SpringSaleData";

const SpringRight = () => {
  return (
    <div className="relative">
      <div className="absolute top-2/4 -translate-y-2/4 -right-5 z-30 swiper-button-next-spring">
        <NextButton />
      </div>
      <div className="absolute top-2/4 -translate-y-2/4 -left-5 z-30 swiper-button-prev-spring">
        <PrevButton />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-spring",
          prevEl: ".swiper-button-prev-spring",
        }}
      >
        {SpringSaleData?.map((product) => (
          <SwiperSlide>
            <SpringProductCard
              key={product.id}
              image={product?.image}
              ratings={product.ratings}
              pCategory={product.pCategory}
              pName={product.pName}
              totalRatings={product.totalRatings}
              price={product.price}
              discount={product.discount}
              sold={product.sold}
              stock={product.stock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpringRight;
