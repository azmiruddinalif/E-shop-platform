import React from "react";
import Order from "../pages/profile/components/Order";
import AccountDetails from "../pages/profile/components/AccountDetails";

export const useRenderComponent = (state) => {
  switch (state) {
    case 1:
      return <Order />;
    case 2:
      return <AccountDetails />;
    default:
      return <div>Not Found</div>;
  }
};
