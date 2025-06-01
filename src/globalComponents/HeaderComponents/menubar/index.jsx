import Container from "../../Container";
import MenuLeftbarLayout from "./menubarLayouts/MenuLeftbarLayout";
import MenuRightbarLayout from "./menubarLayouts/MenuRightbarLayout";

const Menubar = () => {
  return (
    <>
      <div className="bg-orange py-6">
        <Container>
          <div className="grid grid-cols-2 justify-between items-center">
            <MenuLeftbarLayout />
            <MenuRightbarLayout />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Menubar;
