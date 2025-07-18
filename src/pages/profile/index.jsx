import React, { useState } from "react";
import Container from "../../globalComponents/Container";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const UserProfile = () => {
  const [options, setOptions] = useState(1);
  console.log(options);

  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_3.5fr] gap-x-4 mt-20">
          <LeftBar setOptions={setOptions} />
          <RightBar options={options} />
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
