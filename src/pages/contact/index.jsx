import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import ContactBody from "./component/ContactBody";
import MapLocation from "./component/MapLocation";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <div className="mt-20">
          <MapLocation />
        </div>
        <ContactBody />
      </Container>
    </>
  );
};

export default Contact;
