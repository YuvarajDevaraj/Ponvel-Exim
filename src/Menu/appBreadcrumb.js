import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import '../custom.css';

const AppBreadcrumbs = () => {
    const location = useLocation();
    let crumbLink = '';

    const crumbPath = location.pathname.split('/')
        .filter((path) => path !== '')
        .map((crumb) => {
            crumbLink += `/${crumb}`;
            return { name: crumb, link: crumbLink }; 
        });

    const breadcrumbItems = [
        {
            href: '/',
            title: <HomeOutlined />,
        },
        ...crumbPath.map((crumb, index) => ({
            href: crumb.link,
            title: (
                <>
                    <span>{crumb.name}</span>
                </>
            ),
            key: index,
        })),
    ];

    return (
        <Breadcrumb>
            {breadcrumbItems.map((item) => (
                <Breadcrumb.Item key={item.href}>
                    <Link to={item.href}>{item.title}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default AppBreadcrumbs;
