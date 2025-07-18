import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { OrderIcon, UserIcon } from "../../../assets/svg/UserProfileIcons";

const LeftBar = ({ setOptions }) => {
  return (
    <>
      <div className="p-5 border border-white02 rounded-lg">
        <div className="text-center border-b border-b-black100 pb-10">
          <div className="w-[252px] h-[252px] rounded-full bg-white01 mx-auto"></div>
          <h1 className="font-poppins font-semibold text-[24px] text-black01 mt-10">
            Azmir uddin alif
          </h1>
          <p className="font-montserrat font-semibold text-[14px] text-black100">
            alifazmiruddin@gmail.com
          </p>
        </div>
        <div className="mt-10">
          <ul>
            <li
              onClick={() => setOptions(1)}
              className="flex items-center gap-x-2 font-poppins text-base mb-5 cursor-pointer"
            >
              <OrderIcon />
              <span>Orders</span>
            </li>
            <li
              onClick={() => setOptions(2)}
              className="flex items-center gap-x-2 font-poppins text-base mb-5 cursor-pointer"
            >
              <UserIcon />
              <span>Account Details</span>
            </li>
            <li className="flex items-center gap-x-2 font-poppins text-base cursor-pointer">
              <IoLogOutOutline size={30} />
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
