import BestsellerLft from "./bestsellerLayout/BestsellerLft";
import BestsellerRght from "./bestsellerLayout/BestsellerRght";

const BestSeller = () => {
  return (
    <>
      <section className="grid grid-cols-[3fr_1fr] gap-x-4 mt-20">
        <BestsellerLft />
        <BestsellerRght />
      </section>
    </>
  );
};

export default BestSeller;
