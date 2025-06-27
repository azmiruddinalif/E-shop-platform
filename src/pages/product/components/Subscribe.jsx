import SubscribeForm from "../../../globalComponents/subscribe/form";

const Subscribe = () => {
  return (
    <section className="mt-20">
      <div className="rounded-[25px] lg:grid lg:grid-cols-[2fr_1.5fr] overflow-hidden">
        <div className="bg-linear-to-r from-white02 to-gray py-[50px] xl:py-[114px] px-10 xl:pl-[100px]"></div>
        <div className="bg-gray lg:flex items-center justify-center h-full hidden py-[50px] xl:py-[114px] px-10 xl:pl-[100px]">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
