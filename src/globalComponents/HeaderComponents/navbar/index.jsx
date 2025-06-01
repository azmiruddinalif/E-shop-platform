import { Link } from "react-router-dom";
import { Logo } from "../../../assets/svg/Logo";
import Container from "../../Container";
import SearchWithauth from "./SearchWithauth";

const Navbar = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 justify-between items-center py-[22px]">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <SearchWithauth />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
