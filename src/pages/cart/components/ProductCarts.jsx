import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateQty } from "../../../service/redux/feature/cartSlice";

const ProductCarts = ({ id, pName, pCategory, price, qty }) => {
  const dispatch = useDispatch();

  const handleQuantity = (id, newQty) => {
    if (newQty >= 1) {
      dispatch(updateQty({ id, qty: newQty }));
    }
  };

  return (
    <>
      <div className="px-[56px] py-[32px] hover:border-black100 border border-transparent rounded-lg relative group mt-5">
        <div className="grid grid-cols-[607px_171px_171px_171px] gap-x-12 items-center">
          <div className="flex items-center gap-x-5">
            <div className="w-[237px] h-[214px] bg-white01 rounded-md"></div>
            <div>
              <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-normal lg:tracking-[5px]">
                {pCategory}
              </h6>
              <h4 className="font-poppins text-xl font-semibold text-black01 mb-[46px] mt-[16px]">
                {pName}
              </h4>
            </div>
          </div>
          <div>
            <h6 className="font-poppins font-semibold text-xl">${price}</h6>
          </div>
          <div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-8">
                <button
                  className=" cursor-pointer"
                  onClick={() => handleQuantity(id, qty - 1)}
                >
                  <AiOutlineMinus />
                </button>
                <div className="font-poppins text-black01 font-semibold text-base bg-white02 rounded-full flex items-center justify-center w-[40px] h-[40px]">
                  {qty}
                </div>
                <button
                  className="cursor-pointer "
                  onClick={() => handleQuantity(id, qty + 1)}
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
          <div className="pl-2">
            <h6 className="font-poppins text-xl text-black01 font-semibold">
              ${(qty * price).toFixed(2)}
            </h6>
          </div>
        </div>
        <div
          role="button"
          className="absolute top-[50%] translate-y-[-50%] right-12 w-[64px] h-[64px] bg-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-100 cursor-pointer"
        >
          <IoTrashOutline color="white" size={20} />
        </div>
      </div>
    </>
  );
};

export default ProductCarts;
