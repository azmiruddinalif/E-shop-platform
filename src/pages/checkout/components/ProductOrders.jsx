import { Button, Form } from "antd";
import { useSelector } from "react-redux";
import OrderdCarts from "./OrderdCarts";

const ProductOrders = ({ form }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce(
    (acc, crnt) => acc + crnt.price * crnt.qty,
    0
  );

  return (
    <>
      <div className="p-5 rounded-lg bg-white02 h-[700px] overflow-y-auto flex flex-col justify-between">
        <div>
          <h3 className="font-poppins text-black01 text-lg">Orders</h3>
          <div>
            {cartItems.length === 0 ? (
              <div>No Carts Found</div>
            ) : (
              cartItems.map((cart) => (
                <OrderdCarts
                  key={cart.id}
                  id={cart.id}
                  pName={cart.pName}
                  pCategory={cart.pCategory}
                  price={cart.price}
                  qty={cart.qty}
                />
              ))
            )}
          </div>
        </div>
        <div className="bg-white p-[20px] rounded-md">
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span>{subTotal}</span>
          </div>
          <Form form={form}>
            <div>
              <Form.Item label={null} className="!mt-8">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full !bg-orange !h-14"
                >
                  Order Now
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductOrders;
