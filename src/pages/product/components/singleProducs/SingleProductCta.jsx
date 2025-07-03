import { useTranslation } from "react-i18next";
import subscribeImage from "../../../../assets/images/subscribe.png";
import CommonButton from "../../../../globalComponents/CommonButton";

const SingleProductCta = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="mt-20">
        <div className="rounded-[25px] lg:grid lg:grid-cols-[2fr_3fr] overflow-hidden">
          <div className="bg-linear-to-r from-white02 to-gray py-[50px] xl:py-[114px] px-10 xl:pl-[100px]">
            <div>
              <h3 className="font-poppins font-bold text-3xl lg:text-[40px] text-black01 leading-[60px]">
                Get Up-to-Date Gadget Technology
              </h3>
              <p className="font-montserrat text-base lg:text-xl font-normal text-black200 leading-[30px] mb-3 lg:mb-8">
                {t(
                  "Browse our wide selection of electronics and find the perfect promo for you from newsletter."
                )}
              </p>

              <CommonButton className="!bg-orange !px-10 !h-12 !border-none !mt-[16px]">
                <span className="font-montserrat font-bold text-lg text-white">
                  Subscribe
                </span>
              </CommonButton>
            </div>
          </div>
          <div className="bg-gray lg:flex items-center justify-center h-full hidden">
            <img
              src={subscribeImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductCta;
