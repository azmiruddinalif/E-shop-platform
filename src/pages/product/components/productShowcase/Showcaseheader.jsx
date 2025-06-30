import { HiBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { QubeIcon } from "../../../../assets/svg/QubeIcon";
import CustomDropdown from "../../../../globalComponents/CustomDropdown/CustomDropdown";
import {
  setGridView,
  setListView,
} from "../../../../service/redux/feature/viewSlice";

const Showcaseheader = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.view.mode);
  const { from, to, total } = useSelector((state) => state.pagination);

  return (
    <>
      <div>
        <h1 className="font-montserrat text-[36px] font-bold text-black">
          Products
        </h1>
        <div className="flex items-center justify-between mt-6">
          <p className="font-montserrat text-base text-black01">
            Showing {from} - {to} of {total} results.
          </p>
          <div className="flex">
            {/* <div className="flex items-center gap-x-2 justify-end mr-3">
              <span className="font-montserrat font-normal text-sm lg:text-base">
                Sort By:
              </span>
              <div className="w-fit">
                <AllCategoryMenu
                  className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center"
                  icons={true}
                />
              </div>
            </div> */}
            {/* <div className="w-[1px] h-[20px] bg-black100" /> */}
            <div className="flex items-center gap-x-2 justify-end mx-3">
              <span className="font-montserrat font-normal text-sm lg:text-base">
                Sort By:
              </span>
              {/* <div className="w-fit">
                <AllCategoryMenu
                  className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center"
                  icons={true}
                />
              </div> */}
              <div className="w-fit">
                <CustomDropdown
                  className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center"
                  icon={true}
                  items={[
                    {
                      key: "1",
                      label: "Price Low to High",
                    },
                    {
                      key: "2",
                      label: "Price hight to Low",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="w-[1px] h-[20px] bg-black100" />
            <div className="flex items-center ml-3 gap-x-2">
              <span
                className={`cursor-pointer hover:text-orange ${
                  viewMode == "grid" ? "text-orange" : ""
                }`}
                onClick={() => dispatch(setGridView())}
              >
                <QubeIcon />
              </span>
              <span
                className={`cursor-pointer hover:text-orange ${
                  viewMode == "list" ? "text-orange" : ""
                }`}
                onClick={() => dispatch(setListView())}
              >
                <HiBars3 size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcaseheader;
