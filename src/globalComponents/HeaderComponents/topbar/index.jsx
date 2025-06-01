import Container from "../../Container";
import NumberandAddress from "./NumberandAddress";
import SocialsWithLang from "./SocialsWithLang";

const Topbar = () => {
  return (
    <>
      <div className="border-b-1 border-b-black100 py-[22px]">
        <Container>
          <div className="grid grid-cols-2 justify-between">
            <div>
              <NumberandAddress />
            </div>
            <div>
              <SocialsWithLang />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
