import React from "react";
import { useRenderComponent } from "../../../hooks/useRenderComponent";

const RightBar = ({ options }) => {
  const renderComponent = useRenderComponent(options);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="bg-white02 rounded-md p-8">
            <h3 className="font-poppins text-[36px] text-black01 font-semibold max-w-[50%]">
              Order Tracking
            </h3>
            <p className="mt-2 font-montserrat text-xl text-black01">
              See your order history.
            </p>
          </div>
          <div className="bg-white02 rounded-md p-8">
            <h3 className="font-poppins text-[36px] text-black01 font-semibold max-w-[50%]">
              Billing Address
            </h3>
            <p className="mt-2 font-montserrat text-xl text-black01">
              Set your billing address.
            </p>
          </div>
        </div>
        <div className="mt-10">{renderComponent}</div>
      </div>
    </>
  );
};

export default RightBar;
