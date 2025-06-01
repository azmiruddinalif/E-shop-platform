import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const NumberandAddress = () => {
  return (
    <>
      <div className="flex items-center w-full gap-x-5">
        <div className="flex items-center gap-x-2">
          <div>
            <CiLocationOn />
          </div>
          <div>
            <p className="font-montserrat text-sm font-normal text-black01">
              123 Main Street, Anytown USA
            </p>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-black100"></div>
        <div className="flex items-center gap-x-2">
          <div>
            <IoCallOutline />
          </div>
          <div>
            <p className="font-montserrat text-sm font-normal text-black01">
              +8801849702157
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberandAddress;
