// src/App.jsx
import React from 'react';
import { Layout, Menu, Breadcrumb, Badge } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import ProductGrid from './components/Product/ProductGrid';

const { Header, Content, Sider } = Layout;

const App = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', backgroundColor: 'black' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'cursive' }}>Jolteon Products</div>
                <Badge count={totalQuantity} offset={[10, 0]}>
                    <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </Badge>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                        <ProductGrid />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;