import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AccountDetails = () => {
  return (
    <>
      <div>
        <h3 className="font-poppins font-semibold text-[36px] text-black01 border-b-[2px] border-b-orange inline-block">
          Account Details
        </h3>
        <div className="mt-10">
          <Form className="grid grid-cols-2 gap-x-5">
            <Form.Item
              labelCol={{ span: 24 }}
              label={
                <p className="text-black01 font-poppins font-semibold">
                  First Name
                </p>
              }
              name="FirstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name",
                },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Last Name
                </p>
              }
              name="LastName"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name",
                },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              label={
                <p className="text-black01 font-poppins font-semibold">
                  Email Address
                </p>
              }
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                  type: "email",
                },
              ]}
            >
              <Input className="!h-11" />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              label={
                <p className="text-black01 font-poppins font-semibold ">
                  Password
                </p>
              }
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                className="!h-11"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Button
              htmlType="submit"
              className="!w-fit !px-[40px] !h-14 !bg-orange !border !border-orange !font-montserrat !font-bold !text-base !text-white"
            >
              Edit profile
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
