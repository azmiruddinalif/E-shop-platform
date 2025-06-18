import subscribeImage from "../../../../assets/images/subscribe.png";
import SubscribeForm from "../../../../globalComponents/subscribe/form";

const Subscribe = () => {
  return (
    <section className="mt-20">
      <div className="rounded-[25px] lg:grid lg:grid-cols-[2fr_3fr] overflow-hidden">
        <div className="bg-linear-to-r from-white02 to-gray py-[50px] lg:py-[114px] px-10 lg:pl-[100px]">
          <SubscribeForm />
        </div>
        <div className="bg-gray lg:flex items-center justify-center h-full hidden">
          <img
            src={subscribeImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
