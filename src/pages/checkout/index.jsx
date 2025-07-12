import { Form } from "antd";
import { Link, useLocation } from "react-router-dom";
import Container from "../../globalComponents/Container";
import InformationForm from "./components/InformationForm";
import ProductOrders from "./components/ProductOrders";

const Checkout = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  const [form] = Form.useForm();
  return (
    <>
      <Container>
        <div className="mt-[64px]">
          <div className="flex items-center gap-x-4 font-montserrat text-black01">
            <Link to="/">Home</Link>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{pageName}</span>
          </div>
          <div className="text-center">
            <h1 className="mt-[48px] text-black01 font-poppins font-bold text-[56px]">
              Your Checkout
            </h1>
          </div>
          <div className="mt-[80px] grid grid-cols-[2fr_1fr] gap-x-4">
            <InformationForm form={form} />
            <ProductOrders form={form} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
