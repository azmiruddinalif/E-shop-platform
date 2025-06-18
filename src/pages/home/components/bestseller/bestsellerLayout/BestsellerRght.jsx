import promoBanner from "../../../../../assets/images/products/PromoBanner.jpg";

const BestsellerRght = () => {
  return (
    <>
      <div className="md:mt-5 lg:mt-0">
        <img
          src={promoBanner}
          alt="promo"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default BestsellerRght;
