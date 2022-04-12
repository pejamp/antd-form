import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { FormFunc } from './Form';
import styles from './home.module.scss';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <Layout className={styles.container}>
      <Header style={{color: "#fff", textAlign: 'center', fontSize: '48px'}}>
        Form
      </Header>
      <Content className={styles.content}>
        <Title>Profile Settings</Title>
        <FormFunc />
      </Content>
      <Footer style={{fontWeight: 'lighter', textAlign: 'center'}}>2022</Footer>
    </Layout>
  );
}

export default App;
