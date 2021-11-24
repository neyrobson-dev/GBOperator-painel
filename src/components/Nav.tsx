import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  FormOutlined,
} from '@ant-design/icons';

import menuList from '../constants/menu';

const { SubMenu } = Menu;

const Nav: React.FC = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['painel']} style={{ marginTop: 12 }}>
      {menuList.map( item => (
        <>
          {item.url && (
            <Menu.Item key={item.key} icon={<AppstoreOutlined />}>
              <NavLink to={item.url}>{item.name}</NavLink>
            </Menu.Item>
          )}

          {!item.url && (
            <SubMenu key={item.key} title={item.name} icon={<FormOutlined />}>
              {item.items.map((subItem: any) => (
                <Menu.Item key={subItem.key}>
                  <NavLink to={subItem.url}>{subItem.name}</NavLink>
                </Menu.Item>
              ))}
            </SubMenu>
          )}
        </>
      ))}
    </Menu>
  );
}

export default Nav;
