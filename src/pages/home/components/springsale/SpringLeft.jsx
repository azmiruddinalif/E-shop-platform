import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";
import CommonButton from "../../../../globalComponents/CommonButton";
import RenderCountDown from "./RenderCountDown";

const SpringLeft = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3 className="font-poppins font-bold text-[56px] text-black01">
          {t("Spring Sale")}
        </h3>
        <div className="mt-5">
          {" "}
          <Countdown
            date={Date.now() + 10000000000}
            renderer={RenderCountDown}
          />
        </div>
        <CommonButton className="!bg-orange !px-10 !h-12 !border-none !mt-[60px]">
          <span className="font-montserrat font-bold text-lg text-white">
            Shop Now
          </span>
        </CommonButton>
      </div>
    </>
  );
};

export default SpringLeft;
