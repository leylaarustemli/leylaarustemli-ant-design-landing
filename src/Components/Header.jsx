import React from 'react';
import {  Layout, Menu } from 'antd';
const { Header } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  return (
    <Header
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
<img src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt="" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items1}
      style={{
        flex: 1,
        minWidth: 0,
        justifyContent:"flex-end"
      }}
    />
  </Header>
  )
}


export default Navbar