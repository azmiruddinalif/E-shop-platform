const RenderCountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-x-8">
      <div className="text-center">
        <h4 className="font-poppins font-semibold text-[36px] text-orange">
          {days}
        </h4>
        <span className="font-montserrat font-normal text-base text-black01">
          Days
        </span>
      </div>
      <span className="text-orange text-[36px] leading-[1]">:</span>
      <div className="text-center">
        <h4 className="font-poppins font-semibold text-[36px] text-orange">
          {hours}
        </h4>
        <span className="font-montserrat font-normal text-base text-black01">
          Hours
        </span>
      </div>
      <span className="text-orange text-[36px] leading-[1]">:</span>
      <div className="text-center">
        <h4 className="font-poppins font-semibold text-[36px] text-orange">
          {minutes}
        </h4>
        <span className="font-montserrat font-normal text-base text-black01">
          Minutes
        </span>
      </div>
      <span className="text-orange text-[36px] leading-[1]">:</span>
      <div className="text-center">
        <h4 className="font-poppins font-semibold text-[36px] text-orange">
          {seconds}
        </h4>
        <span className="font-montserrat font-normal text-base text-black01">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default RenderCountDown;
