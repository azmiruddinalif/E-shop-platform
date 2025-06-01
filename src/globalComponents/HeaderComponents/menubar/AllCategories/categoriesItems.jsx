import { FaHeadphones, FaTv } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { RiHome9Line, RiPlaystationFill } from "react-icons/ri";
import { RxMobile } from "react-icons/rx";

export const categoriesItems = [
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <MdComputer color="FF624C" /> Computers & Tablets
      </div>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <RxMobile color="FF624C" /> Mobile & Accessories
      </div>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <FaTv color="FF624C" />
        TV & Home Theater
      </div>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <FaHeadphones color="FF624C" /> Audio & Headphones
      </div>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <IoCameraOutline color="FF624C" /> Cameras & Camcorders
      </div>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <RiPlaystationFill color="FF624C" /> Gaming Equipment
      </div>
    ),
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2">
        <RiHome9Line color="FF624C" /> Home Appliances
      </div>
    ),
    key: "6",
  },
];
