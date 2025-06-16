import Menubar from "./menubar";
import MobileNavbar from "./mobileNavbar";
import Navbar from "./navbar";
import Topbar from "./topbar";

const HeaderComponentsLayout = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Topbar />
        <Navbar />
        <Menubar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default HeaderComponentsLayout;
