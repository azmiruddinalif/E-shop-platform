import { Input } from "antd";
import { useTranslation } from "react-i18next";
import CommonButton from "../../CommonButton";

const SubscribeForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3 className="font-poppins font-bold text-[56px] text-black01">
          {t("Get Our Updates")}
        </h3>
        <p className="font-montserrat text-xl font-normal text-black200 leading-[30px] mb-8">
          {t(
            "Browse our wide selection of electronics and find the perfect promo for you from newsletter."
          )}
        </p>
        <Input
          placeholder="Enter your email address ..."
          className="h-14 !px-6"
        />
        <CommonButton className="!bg-orange !px-10 !h-12 !border-none !mt-[16px]">
          <span className="font-montserrat font-bold text-lg text-white">
            Subscribe
          </span>
        </CommonButton>
      </div>
    </>
  );
};

export default SubscribeForm;
