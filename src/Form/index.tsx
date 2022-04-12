import { Button, Col, Divider, Form, Input, Row, Space, message, Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import Dragger from "antd/lib/upload/Dragger";
import { CloudUploadOutlined } from '@ant-design/icons';

export function FormFunc() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  }

  const onReset = () => {
    form.resetFields();
  };

  const props = {
    
    action: 'https://run.mocky.io/v3/c85e3f6b-8028-4c8e-9039-a12c5cc8ba55',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Form form={form} name={"profile-settings"} onFinish={onFinish}>
      <Row gutter={8} justify="space-between">
        <Space direction="vertical" size={0}>
          <Title level={3}>Company profile</Title>
          <Text>Update your company photo and details here.</Text>
        </Space>
        <Space >
          <Form.Item >
            <Button shape="round" htmlType="button" onClick={onReset}>Cancel</Button>
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
          <Form.Item name={'name'}>
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
          <div>Imagem</div>
        </Col>
        <Col span={8}>
          <Form.Item name={'company-logo'}>
            <Dragger {...props}>
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
          <Form.Item name={'reports'}>
            <Checkbox>Reports</Checkbox>
          </Form.Item>
          <Form.Item name={'emails'}>
            <Checkbox>Emails</Checkbox>
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