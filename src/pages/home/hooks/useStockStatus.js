import { useMemo } from "react";

const useStockStatus = (stock, sold) => {
  return useMemo(() => {
    const availableStock = stock - sold;
    const soldPercentage = stock > 0 ? (sold / stock) * 100 : 0;
    const roundPercentage = Math.round(soldPercentage);

    if (roundPercentage >= 100 || availableStock <= 0) {
      return {
        status: "Out of Stock",
        color: "gray",
        percentage: 0,
      };
    } else if (roundPercentage >= 80) {
      return {
        status: "Limited Stock",
        color: "#FF624C",
        percentage: roundPercentage,
      };
    } else {
      return {
        status: `${availableStock} Available`,
        color: "#303030",
        percentage: roundPercentage,
      };
    }
  }, [stock, sold]);
};

export default useStockStatus;
