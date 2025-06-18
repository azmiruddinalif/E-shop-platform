import samsung from "../../../assets/images/Logo1.png";
import openAi from "../../../assets/images/Logo2.png";
import amazon from "../../../assets/images/Logo3.png";
import tencent from "../../../assets/images/Logo4.png";
import spotify from "../../../assets/images/Logo5.png";

const Companies = () => {
  return (
    <section className="mt-20 flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0  items-center">
      <div className="w-[33%] sm:w-fit">
        <img src={samsung} alt="samsung" />
      </div>
      <div className="w-[33%] sm:w-fit">
        <img src={openAi} alt="openAi" />
      </div>
      <div className="w-[33%] sm:w-fit">
        <img src={amazon} alt="openAi" />
      </div>
      <div className="w-[33%] sm:w-fit">
        <img src={tencent} alt="tencent" />
      </div>
      <div className="w-[33%] sm:w-fit">
        <img src={spotify} alt="spotify" />
      </div>
    </section>
  );
};

export default Companies;
