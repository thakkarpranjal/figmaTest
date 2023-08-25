import { Button, Form, Input, Select } from 'antd'
import { Option } from 'antd/es/mentions';
import React from 'react'
import './Quote.css'
import Page1Nav from './Page1/Page1Nav';
import TextArea from 'antd/es/input/TextArea';

function Getquote() {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      const [form] = Form.useForm();
  return (
    <div className='detailsQuote'>
        <div className='headerQuote'>
            <div className='homePage1'>
                <Page1Nav />
            </div>
        </div>
        <div className='h3Quote'>
                <h3>Get Quote</h3>
            </div>
        <div className='formQuote'>
    <Form
      {...layout}
      form={form}
      name="control-hooks"
    //   onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="FirstName"
        label="Firstname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="LatName"
        label="Lastname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="ContactNumber"
        label="Contact Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        name="Message"
        label="Message"
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default Getquote