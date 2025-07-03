import { useSelector } from "react-redux";
import ProductCarts from "./ProductCarts";

const Cartbody = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce(
    (acc, crnt) => acc + crnt.price * crnt.qty,
    0
  );
  console.log(cartItems);

  return (
    <>
      <div>
        <div className="bg-white02 rounded-lg px-[56px] py-[32px]">
          <div className="grid grid-cols-[607px_171px_171px_171px] gap-x-12">
            <div>
              <h4 className="font-montserrat font-bold text-base text-black01 uppercase">
                Product
              </h4>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-base text-black01 uppercase">
                Price
              </h4>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-base text-black01 uppercase">
                QTY
              </h4>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-base text-black01 uppercase">
                Total
              </h4>
            </div>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div>No Carts Found</div>
        ) : (
          cartItems.map((cart) => (
            <ProductCarts
              key={cart.id}
              id={cart.id}
              pName={cart.pName}
              pCategory={cart.pCategory}
              price={cart.price}
              qty={cart.qty}
            />
          ))
        )}
        {/* Subtotal and Controls */}
        <div className="flex justify-between items-center mt-12">
          <div>
            <input
              type="text"
              placeholder="Enter coupon code (ex: FIRSTPAY)"
              className="border border-gray-300 px-4 py-3 rounded-md text-black text-sm w-[300px]"
            />
            <button className="ml-3 font-bold text-sm underline text-black01 hover:text-orange">
              Apply Code
            </button>
          </div>

          <div className="flex items-center gap-x-6 w-[40%] bg-white02 p-4 ">
            <div className="rounded-lg text-right flex items-center justify-between w-full">
              <p className="text-sm font-semibold text-black01 uppercase">
                SUB TOTAL
              </p>
              <p className="text-xl font-bold text-orange">
                ${subTotal.toFixed(2)}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-11 mt-5">
          <button className="text-black01 font-semibold">
            Continue Shopping
          </button>

          <button className="bg-orange text-white px-6 py-3 rounded-md font-semibold">
            Update Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartbody;
