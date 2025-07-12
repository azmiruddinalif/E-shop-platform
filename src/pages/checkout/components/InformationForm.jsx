import { Form, Input, Select } from "antd";

const { Option } = Select;

const InformationForm = ({ form }) => {
  const handleFinish = () => {
    console.log("finish");
  };
  return (
    <>
      <div>
        <h2 className="font-poppins font-semibold text-[36px] text-black01">
          Billing Details
        </h2>
        <div className="mt-5">
          <Form
            form={form}
            onFinish={handleFinish}
            rootClassName="custom-form"
            className="grid grid-cols-2 gap-x-4"
          >
            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold ">
                  First Name
                </p>
              }
              name="firstName"
              required
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold ">
                  Last name
                </p>
              }
              name="lastName"
              required
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Phone Number
                </p>
              }
              name="phoneNumber"
              required
              className="!mt-8"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Email address
                </p>
              }
              name="email"
              required
              className="!mt-8"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter your email address",
                },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <div className="col-span-2">
              <Form.Item
                label={
                  <p className="text-black01 font-poppins font-semibold">
                    Address
                  </p>
                }
                required
                className="!mt-8"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your address",
                  },
                ]}
              >
                <Input className="!h-11" />
              </Form.Item>
            </div>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Country
                </p>
              }
              required
              className="!mt-8"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please enter your country",
                },
              ]}
            >
              <Select placeholder="Select province" className="!h-11">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">State</p>
              }
              required
              className="!mt-8"
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please enter your State",
                },
              ]}
            >
              <Select placeholder="Select State" className="!h-11">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">City</p>
              }
              required
              className="!mt-8"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please enter your city",
                },
              ]}
            >
              <Select placeholder="Select State" className="!h-11">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Zip Code
                </p>
              }
              required
              className="!mt-8"
              name="zipcode"
              rules={[
                {
                  message: "Please enter your zip code",
                },
              ]}
            >
              <Select placeholder="Select State" className="!h-11">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>

            <div className="col-span-2">
              <Form.Item
                label={
                  <p className="text-black01 font-poppins font-semibold">
                    Other notes
                  </p>
                }
                className="!mt-8"
                name="message"
                rules={[
                  {
                    message: "Please enter your zip code",
                  },
                ]}
              >
                <Input.TextArea className="!h-24" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default InformationForm;
