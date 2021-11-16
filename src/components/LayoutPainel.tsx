import React, { useState } from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

const LayoutPainel: React.FC = ({children}) => {
  const { Header, Sider, Content } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={menuCollapsed}>
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 10}}>
          {/* <img src="images/logo.png" style={{width: '70%', }} alt=""/> */}
          <span style={{ fontSize: 24, fontWeight: 'bold', color: '#FFF' }}>GoBuild</span>
        </div>
        <Nav />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          { menuCollapsed ?
              <MenuUnfoldOutlined className="trigger" onClick={() => setMenuCollapsed(!menuCollapsed)} />
          :
              <MenuFoldOutlined className="trigger" onClick={() => setMenuCollapsed(!menuCollapsed)}/>
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutPainel;
