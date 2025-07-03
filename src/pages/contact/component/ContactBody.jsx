import { Link, useLocation } from "react-router-dom";
import ContactCard from "./ContactCard";
import ContactCta from "./ContactCta";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-x-3 items-center">
        <div>
          <h1 className="font-montserrat text-black01 my-[64px]">
            <Link className="font-normal" to="/">
              Home
            </Link>{" "}
            | <span className="font-bold"> {pageName}</span>
          </h1>
          <ContactForm />
        </div>
        <div className="mt-5 xl:mt-0">
          <ContactCard />
        </div>
      </div>
      <ContactCta />
    </>
  );
};

export default ContactBody;
