import { Tooltip } from "antd";
import { FaOpencart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getStars } from "../../utils/generateRating";
import { getDiscountedPrice } from "../../utils/getDiscountPrice";

const ProductCardList = ({
  image,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
  discount,
}) => {
  return (
    <>
      <div className="relative group border border-transparent hover:border-black100 p-6 rounded-[10px] grid grid-cols-[0.8fr_2fr_1fr]">
        <div className=" w-[200px] h-[200px] overflow-hidden rounded-[10px] border border-black100">
          <img
            src={image}
            alt="p-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-normal lg:tracking-[5px]">
            {pCategory}
          </h6>
          {pName?.length > 20 ? (
            <Tooltip
              placement="top"
              color="white"
              title={
                <h4 className="font-poppins text-sm font-semibold text-black01">
                  {pName}
                </h4>
              }
            >
              <Link
                to="/product"
                className="font-poppins text-xl font-semibold text-black01 truncate"
              >
                {pName}
              </Link>
            </Tooltip>
          ) : (
            <Link
              to="/product"
              className="font-poppins text-xl font-semibold text-black01 truncate group-hover:text-orange transition-all ease-linear duration-100"
            >
              {pName}
            </Link>
          )}
          <div className="flex items-center gap-x-2 mt-2">
            {getStars(ratings)}
            <span className="font-montserrat text-base font-normal text-black01">
              ({totalRatings})
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-x-3">
              <div className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white">
                <FaOpencart />
              </div>
              <div className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white">
                <FiHeart />
              </div>
              <div className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white">
                <IoShareSocialOutline />
              </div>
            </div>
          </div>
          {discount && (
            <div className="absolute top-2 right-5 w-fit py-1.5 px-5 bg-orange rounded-[5px]">
              <span className="text-white font-montserrat font-bold text-base">
                {discount}%
              </span>
            </div>
          )}
          <div className="flex items-center gap-x-2 mt-2">
            <p className="font-poppins text-2xl font-semibold text-black01 group-hover:text-orange transition-all ease-linear duration-100">
              ${getDiscountedPrice(price, discount)}
            </p>
            {discount && (
              <span className="font-montserrat text-base font-normal text-black01 line-through">
                ${price}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardList;
