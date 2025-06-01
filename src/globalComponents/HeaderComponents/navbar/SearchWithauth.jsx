import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

const SearchWithauth = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between w-full gap-x-5">
      <div className="border border-black100 rounded-[10px] flex items-center justify-between px-[18px] py-[14px] w-[332px]">
        <input
          placeholder={t("Search Products_...")}
          type="text"
          className="outline-none w-[90%]"
        />
        <CiSearch size={20} />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <FaOpencart size={25} />
          <span className="absolute -top-2 right-0 w-1.5 h-1.5 bg-orange rounded-full"></span>
        </div>
        <div>
          <h6 className="font-montserrat text-base text-black01">
            {t("Cart")}
          </h6>
          <span className="font-montserrat text-base font-bold text-black01">
            $150,00
          </span>
        </div>
      </div>
      <div className="w-[1px] h-[32px] bg-black100"></div>
      <div className="flex items-center gap-x-5">
        <div>
          <LuUserRound size={25} />
        </div>
        <div>
          <h6 className="font-montserrat text-base text-black01">
            {t("User")}
          </h6>
          <span className="font-montserrat text-base font-bold text-black01">
            {t("Account")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchWithauth;
