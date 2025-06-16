import { useTranslation } from "react-i18next";
import { FaOpencart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavListItems = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/product"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            {t("Products")}
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            {t("Blog")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            {t("Contact")}
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            LIMITED SALE
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            {t("Best_Seller")}
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className="font-montserrat font-bold text-base !text-black01 hover:!text-orange"
          >
            {t("New_Arrival")}
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between w-full gap-x-5 mt-20">
        <div className="flex items-center gap-x-5">
          <div className="relative">
            <FaOpencart size={20} />
            <span className="absolute -top-2 right-0 w-1.5 h-1.5 bg-orange rounded-full"></span>
          </div>
          <div>
            <h6 className="font-montserrat text-sm text-black01">
              {t("Cart")}
            </h6>
            <span className="font-montserrat text-sm font-bold text-black01">
              $150,00
            </span>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-black100"></div>
        <div className="flex items-center gap-x-5">
          <div>
            <LuUserRound size={20} />
          </div>
          <div>
            <h6 className="font-montserrat text-base text-black01">
              {t("User")}
            </h6>
            <span className="font-montserrat text-sm font-bold text-black01">
              {t("Account")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavListItems;
