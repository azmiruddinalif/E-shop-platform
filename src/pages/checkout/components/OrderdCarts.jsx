const OrderdCarts = ({ pName, price, qty }) => {
  return (
    <div className="group mt-5">
      <div className="flex gap-x-12 items-center">
        <div className="flex items-center gap-x-5">
          <div>
            <h4 className="font-montserrat text-lg font-normal text-black01 mb-[5px] mt-[16px]">
              {pName}
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-8">
              <div className="font-montserrat text-black01 font-semibold text-base bg-white02 rounded-full flex items-center justify-center w-[40px] h-[40px]">
                {qty}
              </div>
            </div>
          </div>
        </div>
        <div className="pl-2">
          <h6 className="font-poppins text-xl text-black01 font-semibold">
            ${(qty * price).toFixed(2)}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default OrderdCarts;
