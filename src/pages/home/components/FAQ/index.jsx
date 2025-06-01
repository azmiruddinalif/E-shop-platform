import Container from "../../../../globalComponents/Container";
import FaqLeft from "./FaqLayout/FaqLeft";
import FaqRight from "./FaqLayout/FaqRight";

const FaqSection = () => {
  return (
    <section className="bg-white02 py-16 mt-20">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-9">
          <FaqLeft />
          <FaqRight />
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
