import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AllCategoryMenu from "../AllCategories";

const MenuLeftbarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-x-20">
        <AllCategoryMenu
          isMenu={true}
          className="font-montserrat font-bold text-base text-white cursor-pointer flex items-center gap-x-3"
        />
        <Link
          to="/product"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Products")}
        </Link>
        <Link
          to="/blog"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Blog")}
        </Link>
        <Link
          to="/contact"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Contact")}
        </Link>
      </div>
    </>
  );
};

export default MenuLeftbarLayout;
