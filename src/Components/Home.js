// src/components/Header.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header,Content,Footer } = Layout;

const AppHeader = ({children}) => {
  return (
  <Layout>
    <Header>
    
    <div className="logo" />
   
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/About">About</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/Blog">Blog</Link></Menu.Item>
      <Menu.Item key="3"><Link to={`/post/${1}`}>Post</Link></Menu.Item>
    </Menu>
   
  </Header>

  <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>this is Footer used by antd</Footer>
 
  </Layout>
);
}

export default AppHeader;
