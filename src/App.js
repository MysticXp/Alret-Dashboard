import React, { useState } from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import { sampleData } from './data/sampleData';
import SeverityIndicator from './components/SeverityIndicator';
import DimensionFilter from './components/DimensionFilter';
import AlertChart from './components/AlertChart';
import './App.css';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [selectedAlertIndex, setSelectedAlertIndex] = useState(0);
  const selectedAlert = sampleData[selectedAlertIndex];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        Alert Dashboard
      </Header>
      <Layout>
        <Sider width={250} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ height: '100%' }}
            onSelect={({ key }) => setSelectedAlertIndex(Number(key))}
          >
            {sampleData.map((alert, index) => (
              <Menu.Item key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{alert.metric}</span>
                  <SeverityIndicator severity={alert.labels.severity} />
                </div>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content style={{ padding: '24px' }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <DimensionFilter alert={selectedAlert} />
            </Col>
            <Col span={16}>
              <Card>
                <AlertChart alert={selectedAlert} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;