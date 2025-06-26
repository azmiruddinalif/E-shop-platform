import { Checkbox } from "antd";

const Brands = () => {
  return (
    <>
      <div className="my-5">
        <h4 className="font-montserrat font-bold text-xl text-black01">
          Brands
        </h4>
        <div className="mt-5">
          <ul>
            <li className="my-2 flex items-center justify-between">
              <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                Apple
              </Checkbox>
              <span>(100)</span>
            </li>
            <li className="my-2 flex items-center justify-between">
              <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                Samsung
              </Checkbox>
              <span>(340)</span>
            </li>
            <li className="my-2 flex items-center justify-between">
              <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                ASUS
              </Checkbox>
              <span>(340)</span>
            </li>
            <li className="my-2 flex items-center justify-between">
              <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                Dell
              </Checkbox>
              <span>(1340)</span>
            </li>
            <li className="my-2 flex items-center justify-between">
              <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                Lenovo
              </Checkbox>
              <span>(140)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Brands;
