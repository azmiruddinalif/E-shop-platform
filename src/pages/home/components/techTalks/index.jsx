import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import BlogCard from "../../../../globalComponents/blogCard";
import { TechTalksData } from "./TechTalksData";

const TechTalks = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <>
      <div className="mt-20">
        <div className="flex  justify-between">
          <div>
            <h3 className="font-poppins text-[36px] font-semibold text-black01">
              {t("Tech Talk")}
            </h3>
            <p className="font-montserrat font-normal text-xl text-black01 mt-4">
              Stay up to date with the latest trends, reviews, and insights from
              our experts.
            </p>
          </div>
          <Link
            to="/product"
            className="flex items-center gap-x-2 font-montserrat font-bold text-base text-orange group self-end"
          >
            {t("View_All")}{" "}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <HiArrowLongRight size={24} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-10 mt-12">
          {TechTalksData.slice(0, 3).map((blog) => (
            <BlogCard pathname={pathname} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechTalks;
