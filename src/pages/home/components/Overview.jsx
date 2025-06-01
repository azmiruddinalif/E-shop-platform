import overView02 from "../../../assets/images/products/overview02.png";
import overView01 from "../../../assets/images/products/overvire01.png";
import Container from "../../../globalComponents/Container";

const Overview = () => {
  return (
    <section className="mt-[80px]">
      <Container>
        <div className="grid grid-cols-[auto_auto] gap-x-5">
          <img
            src={overView01}
            alt="over view"
            className="w-full h-full object-cover"
          />
          <img
            src={overView02}
            alt="over view"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Overview;
