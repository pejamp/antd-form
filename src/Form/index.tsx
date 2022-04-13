import { Button, Col, Divider, Form, Input, Row, Space, message, Checkbox, Modal, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import Dragger from "antd/lib/upload/Dragger";
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState } from "react";

interface formProps {
  name: string;
  "company-logo": any;
  description: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  "url-profile": string;
  reports: boolean;
  emails: boolean;
}


export function FormFunc() {
  const [reportCheck, setReportCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = (values: formProps) => {
    console.log(values);
  }

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} name={"profile-settings"} onFinish={handleFinish} initialValues={{ reports: false, emails: false }}>
      <Row gutter={8} justify="space-between">
        <Space direction="vertical" size={0}>
          <Title level={3}>Company profile</Title>
          <Text>Update your company photo and details here.</Text>
        </Space>
        <Space >
          <Form.Item >
            <Button shape="round" htmlType="button" onClick={handleReset}>Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" shape="round" htmlType="submit">Save</Button>
          </Form.Item>
        </Space>
      </Row>
      <Divider />
      <Row gutter={8} align="top" >
        <Col span={6}>
          <Title level={5}>public profile</Title>
          <Text>This will be displayed on your profile</Text>
        </Col>
        <Col span={12}>
          <Form.Item 
            name={'name'}
            rules={[
              { required: true, message: "Please enter your name" },
              { whitespace: true, message: "Please enter a valid name" },
              { min: 2, message: "A name with at least 2 characters" },
            ]}
            hasFeedback
          >
            <Input size="large" placeholder="Name..." />
          </Form.Item>
          <Form.Item name={'url-profile'}>
            <Input size="large" addonBefore="company.com/profile/" placeholder="..." />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={8} align="top" >
        <Col span={6}>
          <Title level={5}>Tagline</Title>
          <Text>A quick snapshot of your company.</Text>
        </Col>
        <Col span={12}>
          <Form.Item name={'description'}>
            <TextArea showCount maxLength={120} style={{height: 100}} placeholder="describe your company..." />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={8} align="top" >
        <Col span={6}>
          <Title level={5}>Company logo</Title>
          <Text>Update your company logo and then choose where you want it to display.</Text>
        </Col>
        <Col span={4}> 
          <Modal
      
          >
            <img alt="example" style={{ width: '100%' }} src={''} />
          </Modal>
        </Col>
        <Col span={8}>
          <Form.Item 
            name={'company-logo'} 
            getValueFromEvent={(event) => {
              console.log(event);
              if(Array.isArray(event)) {
                return event;
              }
              return event && event.fileList
            }}
          >
            <Dragger 
              showUploadList={true}
              accept=".svg,.png,.jpg,.gif"
            >
              <p>
                <CloudUploadOutlined style={{fontSize: '24px', background: '#c6f1ff', borderRadius: '50px'}} />
              </p>
              <p><b>Click to upload</b> or drag and drop SVG, PNG, JPG or GIF(max. 800x400px)</p>
            </Dragger>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={8} align="top" >
        <Col span={6}>
          <Title level={5}>Branding</Title>
          <Text>Add your logo to reports and emails.</Text>
        </Col>
        <Col span={12}>
          <Form.Item name={'reports'} valuePropName="checked">
            <Checkbox checked={reportCheck} onChange={() => setReportCheck(!reportCheck)}>Reports</Checkbox>
          </Form.Item>
          <Form.Item name={'emails'} valuePropName="checked">
            <Checkbox checked={emailCheck} onChange={() => setEmailCheck(!emailCheck)}>Emails</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={8} align="top" >
        <Col span={6}>
          <Title level={5}>Social profiles</Title>
        </Col>
        <Col span={12}>
          <Form.Item name={'twitter'}>
            <Input size="large" addonBefore="twitter.com/" placeholder="..." />
          </Form.Item>
          <Form.Item name={'facebook'}>
            <Input size="large" addonBefore="facebook.com/" placeholder="..." />
          </Form.Item>
          <Form.Item name={'linkedin'}>
            <Input size="large" addonBefore="linkedin.com/company/" placeholder="..." />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
    </Form>
  );
}