import { AiOutlineMinus } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../../../globalComponents/CommonButton";
import { addCart } from "../../../../service/redux/feature/cartSlice";
import {
  setCountDec,
  setCountInc,
} from "../../../../service/redux/feature/counterSlice";
import { supportData } from "../../../home/components/support/supportData";

const CheckoutCount = ({ singleProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countValue = useSelector((count) => count.count.count);
  const disableWhenLessThanOne = countValue === 1;

  const handleAddToCartAndRedirect = () => {
    dispatch(addCart({ product: singleProduct, qty: countValue }));
    navigate("/cart");
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            {supportData.slice(1, 4)?.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-x-5" key={index}>
                  <span className="text-black01">
                    <Icon />
                  </span>
                  <div>
                    <h5 className="font-montserrat font-bold text-sm md:text-base text-black01">
                      {item.title}
                    </h5>
                    <p className="font-montserrat font-normal text-xs md:text-base text-black01">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-8">
              <button
                disabled={disableWhenLessThanOne}
                className="w-[56px] h-[56px] cursor-pointer hover:bg-white02 rounded-full flex items-center justify-center"
                onClick={() => dispatch(setCountDec())}
              >
                <AiOutlineMinus />
              </button>
              <div className="font-poppins text-black01 font-semibold text-[36px]">
                {countValue}
              </div>
              <button
                className="w-[56px] h-[56px] cursor-pointer hover:bg-white02 rounded-full flex items-center justify-center"
                onClick={() => dispatch(setCountInc())}
              >
                <FiPlus />
              </button>
            </div>
            <div className="flex item-center gap-x-3">
              <CommonButton className="!bg-orange !px-10 !h-12 !border-none">
                <span className="font-montserrat font-bold text-base lg:text-lg text-white">
                  Buy Now
                </span>
              </CommonButton>
              <button
                onClick={handleAddToCartAndRedirect}
                className="w-[49px] h-[49px] rounded-md flex items-center justify-center border border-orange"
              >
                <FaOpencart color="#FF624C" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCount;
