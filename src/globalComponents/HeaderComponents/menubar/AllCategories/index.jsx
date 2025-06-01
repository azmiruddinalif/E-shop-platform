import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { categoriesItems } from "./categoriesItems";

const AllCategoryMenu = ({ isMenu, icons, className }) => {
  const { t } = useTranslation();

  return (
    <>
      <Dropdown menu={{ items: categoriesItems }} trigger={["click"]}>
        <div className={className}>
          {isMenu && <FaBars />}
          {t("AllCategory")}
          {icons && (
            <span>
              <MdKeyboardArrowDown size={24} />
            </span>
          )}{" "}
        </div>
      </Dropdown>
    </>
  );
};

export default AllCategoryMenu;
