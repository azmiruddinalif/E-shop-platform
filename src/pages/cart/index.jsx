import { Link, useLocation } from "react-router-dom";
import Container from "../../globalComponents/Container";
import Cartbody from "./components/Cartbody";

const Cart = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
      <Container>
        <div className="mt-[64px]">
          <div className="flex items-center gap-x-4 font-montserrat text-black01">
            <Link to="/">Home</Link>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{pageName}</span>
          </div>
          <h1 className="mt-[48px] text-black01 font-poppins font-bold text-[56px]">
            Your Cart
          </h1>
          <div className="mt-[28px]">
            <Cartbody />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
