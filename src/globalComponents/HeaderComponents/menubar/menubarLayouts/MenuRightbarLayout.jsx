import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MenuRightbarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-end gap-x-20">
        <Link
          to="/product"
          className="font-montserrat font-bold text-base text-white"
        >
          LIMITED SALE 👋🏻
        </Link>
        <Link
          to="/product"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Best_Seller")}
        </Link>
        <Link
          to="/product"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("New_Arrival")}
        </Link>
      </div>
    </>
  );
};

export default MenuRightbarLayout;
