import Container from "../../../../globalComponents/Container";
import SpringLeft from "./SpringLeft";
import SpringRight from "./SpringRight";

const SpringSale = () => {
  return (
    <>
      <section className="bg-white02 py-16 mt-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-[35%]">
              <SpringLeft />
            </div>
            <div className="w-full lg:w-[55%] mt-5 lg:mt-0">
              <SpringRight />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpringSale;
