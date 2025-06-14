import samsung from "../../../assets/images/Logo1.png";
import openAi from "../../../assets/images/Logo2.png";
import amazon from "../../../assets/images/Logo3.png";
import tencent from "../../../assets/images/Logo4.png";
import spotify from "../../../assets/images/Logo5.png";

const Companies = () => {
  return (
    <section className="mt-20 flex justify-between items-center">
      <img src={samsung} alt="samsung" />
      <img src={openAi} alt="openAi" />
      <img src={amazon} alt="openAi" />
      <img src={tencent} alt="tencent" />
      <img src={spotify} alt="spotify" />
    </section>
  );
};

export default Companies;
