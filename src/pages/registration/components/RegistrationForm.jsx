import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import CommonButton from '../../../globalComponents/CommonButton';

const RegistrationForm = () => {

  return (
    <>
    <div className='p-[48px] bg-white02 rounded-lg'>
        <Form >
            <Form.Item
                labelCol={{span: 24}}
                label={
                    <p className="text-black01 font-poppins font-semibold">
                    Email Address
                    </p>
                }
                name="email"
                rules={[
                    { required: true, message: "Please enter your email", type:'email' },
                ]}
                >
                    <Input className="!h-11" />
                </Form.Item>
            
            <Form.Item
              labelCol={{span: 24}}
              label={
                <p className="text-black01 font-poppins font-semibold ">
                  Password
                </p>
              }
              name="password"
              rules={[
                { required: true, message: "Please enter your password", },
              ]}
            >
                 <Input.Password className="!h-11"  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Form.Item>

            <Form.Item
              labelCol={{span: 24}}
              label={
                <p className="text-black01 font-poppins font-semibold ">
                  Username
                </p>
              }
              name="password"
              rules={[
                { required: true, message: "Please enter your username", },
              ]}
            >
                 <Input className="!h-11" />
            </Form.Item>
              <Button
              htmlType='submit'
              className="!px-[40px] !h-14 !bg-orange !border !border-orange !font-montserrat !font-bold !text-base !text-white !w-full"
            >
              Create Account
            </Button>
        </Form>
    </div>
    </>
  )
}

export default RegistrationForm