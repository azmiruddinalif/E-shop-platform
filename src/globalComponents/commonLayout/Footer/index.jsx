import { useTranslation } from "react-i18next";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import applePay from "../../../assets/images/applePay.png";
import masterCard from "../../../assets/images/mastercard.png";
import paypal from "../../../assets/images/paypal.png";
import visa from "../../../assets/images/visa.png";
import { Logo } from "../../../assets/svg/Logo";
import Container from "../../Container";
import { footerLinkList } from "./data";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <footer className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-2 h-full">
          <div className="flex flex-col justify-between h-full">
            <Link to="/">
              <Logo />
            </Link>
            <div className="mt-5 lg:mt-0">
              <ul>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01 mb-3">
                  <FaPhoneAlt color="#828282" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01 mb-3">
                  <BsEnvelopeFill color="#828282" />
                  <span>information@eshop.com</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01">
                  <FaMapMarkerAlt color="#828282" />
                  <span>123 Main Street, Suite 105, Anytown USA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 xl:gap-x-2 mt-5 lg:mt-0">
            {footerLinkList.map((item, index) => {
              const linkLists = item.linkTitle;
              return (
                <div key={index}>
                  <h4 className="font-poppins font-semibold text-xl text-black01">
                    {t(item.title)}
                  </h4>
                  {linkLists.map((data) => {
                    return (
                      <div key={data.linkTopic} className=" mt-[24px]">
                        <ul>
                          <li className="font-montserrat font-normal text-sm xl:text-base text-black200 hover:text-orange transition-all ease-linear duration-75">
                            <Link to={data.to}>{data.linkTopic}</Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div>
              <div>
                <h4 className="font-poppins font-semibold text-xl text-black01">
                  Payments
                </h4>
                <div className="flex justify-between items-center gap-x-2 mt-[24px]">
                  <div className="w-[25%] xl:w-fit">
                    <img src={visa} alt="visa" />
                  </div>
                  <div className="w-[25%] xl:w-fit">
                    <img src={masterCard} alt="masterCard" />
                  </div>
                  <div className="w-[25%] xl:w-fit">
                    <img src={applePay} alt="applePay" />
                  </div>
                  <div className="w-[25%] xl:w-fit">
                    <img src={paypal} alt="paypal" />
                  </div>
                </div>
              </div>
              <div className="mt-[73px]">
                <h4 className="font-poppins font-semibold text-xl text-black01">
                  Follow us
                </h4>
                <ul className="mt-[24px]">
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-3">
                    <Link to="">Twitter</Link>
                  </li>
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-3">
                    <Link to="">Instagram</Link>
                  </li>
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75">
                    <Link to="">Facebook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-t-black100 flex flex-col md:flex-row justify-between items-center py-2">
          <span className="font-montserrat font-normal text-xs md:text-sm text-black200">
            Copyright © 2025 E-Shop. All Rights Reserved.
          </span>
          <div className="flex items-center gap-x-3">
            <Link
              to=""
              className="font-montserrat font-normal text-black200 text-xs lg:text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-black200">|</span>
            <Link
              to=""
              className="font-montserrat font-normal text-black200 text-xs lg:text-sm"
            >
              Terms & Condition
            </Link>
            <span className="text-black200">|</span>
            <Link
              to=""
              className="font-montserrat font-normal text-black200 text-xs lg:text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
