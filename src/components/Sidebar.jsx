import { AppstoreOutlined, MenuFoldOutlined, MailOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState, useEffect } from 'react';
import style from '../style/Sidebar.module.css';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('菜单一', 'sub1', <MailOutlined />, [getItem('子菜单1-1', '1'), getItem('子菜单1-2', '2')]),
  getItem('菜单二', 'sub2', <AppstoreOutlined />, [getItem('子菜单2-1', '3'), getItem('子菜单2-2', '4')]),
];
const Sidebar = ({ onChangeText, currentMenu }) => {
  const handleClick = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    onChangeText(domEvent.target.innerText);
    setCurrent(key);
  };

  let [current, setCurrent] = useState('1');
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    items.forEach(item => {
      item.children.forEach(child => {
        if (child.key === current) {
          child.label = currentMenu;
        }
      });
    });
  }, [currentMenu]);
  return (
    <div className={style.s_box}>
      <div className={style.btn_box}>
        <Button onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</Button>
      </div>
      <Menu
        onSelect={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Sidebar;
