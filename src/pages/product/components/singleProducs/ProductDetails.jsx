import ReactImageMagnify from "react-image-magnify";
import { getStars } from "../../../../utils/generateRating";
import { getDiscountedPrice } from "../../../../utils/getDiscountPrice";

const ProductDetails = ({
  pName,
  image,
  totalRatings,
  ratings,
  price,
  discount,
  brand,
  size,
  weight,
  delivery,
  variant,
}) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[2fr_1.5fr] gap-x-8">
          <div className="relative w-full h-[500px] overflow-visible rounded-xl border border-gray flex items-center justify-center">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: false,
                  src: image,
                  width: 450,
                  height: 450,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: {
                  zIndex: 1000,
                },
                isHintEnabled: true,
                enlargedImagePosition: "beside",
                shouldUsePositiveSpaceLens: true,
              }}
            />
            {/* <img src={image} alt="" className="w-full h-full object-contain" /> */}
          </div>
          <div>
            <div className="flex items-center gap-x-2 mt-2">
              {getStars(ratings)}
              <span className="font-montserrat text-xl font-normal text-black01">
                ({totalRatings})
              </span>
            </div>
            <h1 className="font-poppins text-[36px] font-semibold text-black01 mt-1 border-b border-b-black100 pb-4">
              {pName}
            </h1>
            <div className="flex items-end gap-x-2 mt-[24px]">
              <p className="font-poppins text-[56px] font-semibold text-orange leading-[0.8]">
                ${getDiscountedPrice(price, discount)}
              </p>
              {discount && (
                <span className="font-montserrat text-lg font-normal text-black01 line-through">
                  ${price}
                </span>
              )}
            </div>
            <div className="mt-[48px]">
              <ul className="w-full">
                <li className="flex items-center justify-between mb-4">
                  <p className="font-poppins font-semibold text-xl">Brand</p>
                  <span className="font-montserrat font-normal text-xl">
                    {brand}
                  </span>
                </li>
                <li className="flex items-center justify-between mb-4">
                  <p className="font-poppins font-semibold text-xl">Size</p>
                  <span className="font-montserrat font-normal text-xl">
                    {size}
                  </span>
                </li>
                <li className="flex items-center justify-between mb-4">
                  <p className="font-poppins font-semibold text-xl">Weight</p>
                  <span className="font-montserrat font-normal text-xl">
                    {weight}
                  </span>
                </li>
                <li className="flex items-center justify-between mb-4">
                  <p className="font-poppins font-semibold text-xl">Delivery</p>
                  <span className="font-montserrat font-normal text-xl">
                    {delivery}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-poppins font-semibold text-xl">Variant</p>
                  <div className="font-montserrat font-normal text-xl flex items-center gap-x-2">
                    {variant.map((v, i) => (
                      <div
                        key={i}
                        className="py-4 px-8 border border-black100 rounded-md hover:border-orange hover:text-orange"
                      >
                        <span className="font-montserrat text-base">{v}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
