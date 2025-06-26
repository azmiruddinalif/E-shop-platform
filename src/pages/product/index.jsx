import Container from "../../globalComponents/Container";
import LeftProductComponents from "./components/LeftProductComponents";
import RightProductComponents from "./components/RightProductComponents";

const Product = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_3.8fr] gap-x-4 mt-[64px]">
          <LeftProductComponents />
          <RightProductComponents />
        </div>
      </Container>
    </>
  );
};

export default Product;
