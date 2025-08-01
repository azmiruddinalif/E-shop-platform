import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { getStars } from "../../../../utils/generateRating";
import { getDiscountedPrice } from "../../../../utils/getDiscountPrice";
import useStockStatus from "../../hooks/useStockStatus";

const SpringProductCard = ({
  image,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
  discount,
  sold,
  stock,
}) => {
  const { status, color, percentage } = useStockStatus(stock, sold);

  return (
    <>
      <div className="relative group hover:bg-white p-6 rounded-[10px]">
        <div className=" w-full h-[345px] overflow-hidden rounded-[10px]">
          <img
            src={image}
            alt="p-image"
            className="w-full h-full object-cover"
          />
        </div>

        {discount && (
          <div className="absolute top-2 right-5 w-[100px] h-[100px] py-1.5 px-5 bg-orange rounded-full flex items-center justify-center">
            <span className="text-white font-poppins font-semibold text-2xl">
              {discount}%
            </span>
          </div>
        )}
        <div className="mt-10">
          <h6 className="font-montserrat text-xs lg:text-sm font-normal text-black01 uppercase tracking-normal lg:tracking-[5px]">
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
                className="font-poppins text-base lg:text-xl font-semibold text-black01 truncate"
              >
                {pName}
              </Link>
            </Tooltip>
          ) : (
            <Link
              to="/product"
              className="font-poppins text-base lg:text-xl font-semibold text-black01 truncate group-hover:text-orange transition-all ease-linear duration-100"
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
          <div className="flex items-center gap-x-2 mt-2">
            <p className="font-poppins text-lg lg:text-2xl font-semibold text-black01 group-hover:text-orange transition-all ease-linear duration-100">
              ${getDiscountedPrice(price, discount)}
            </p>
            {discount && (
              <span className="font-montserrat text-base font-normal text-black01 line-through">
                ${price}
              </span>
            )}
          </div>
          <div className="w-full bg-white01 rounded-xl relative z-[1]">
            <div
              className="absolute -z-[1] top-0 left-0 h-full rounded-xl transition-all duration-300 ease-in-out"
              style={{
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            ></div>
            <h5 className="text-center text-white">{status}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringProductCard;
