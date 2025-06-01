import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../../globalComponents/Container";
import NextButton from "../../../../globalComponents/NextButton";
import PrevButton from "../../../../globalComponents/PrevButton";
import ProductCard from "../../../../globalComponents/productCards";
import { FeaturedProductsData } from "./featuredData";

const FeaturedProducts = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[80px]">
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins text-[36px] font-semibold text-black01">
              {t("Featured_Products")}
            </h3>
            <Link
              to="/product"
              className="flex items-center gap-x-2 font-montserrat font-bold text-base text-orange group"
            >
              {t("View_All")}{" "}
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                <HiArrowLongRight size={24} />
              </span>
            </Link>
          </div>
          <div className="absolute top-2/4 -translate-y-2/4 -right-5 z-30 swiper-button-next">
            <NextButton />
          </div>
          <div className="absolute top-2/4 -translate-y-2/4 -left-5 z-30 swiper-button-prev">
            <PrevButton />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {FeaturedProductsData?.map((product) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
