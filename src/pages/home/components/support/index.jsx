import { supportData } from "./supportData";

const SupportSection = () => {
  return (
    <section className="flex items-center justify-between mt-10 lg:mt-20">
      {supportData?.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className="flex flex-wrap items-center gap-x-5" key={index}>
            <span className="text-black01">
              <Icon />
            </span>
            <div>
              <h5 className="font-montserrat font-bold text-sm md:text-base text-black01">
                {item.title}
              </h5>
              <p className="font-montserrat font-normal text-xs md:text-base text-black01">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SupportSection;
