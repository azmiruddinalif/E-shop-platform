import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/svg/Logo";
import Container from "../../Container";
import CustomDrawer from "../../drawer";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="border-b-1 border-b-black100">
        <Container>
          <div className="flex gap-x-3 justify-between items-center py-[22px]">
            <Link to="/" className="w-[20%]">
              <Logo width={70} />
            </Link>
            <div className="border border-black100 rounded-[10px] flex items-center justify-between px-[10px] py-[8px] w-[60%]">
              <input
                placeholder={t("Search Products_...")}
                type="text"
                className="outline-none w-[90%]"
              />
              <CiSearch size={20} />
            </div>
            <div
              className="w-[15%] flex justify-end cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <RxHamburgerMenu size={25} />
            </div>
          </div>
        </Container>
      </div>
      <CustomDrawer
        open={open}
        setOpen={setOpen}
        placement="left"
        closable="true"
        rootClassName="custom_drawer"
        title=""
      >
        <h1>this is azmir uddin alif</h1>
      </CustomDrawer>
    </>
  );
};

export default MobileNavbar;
