import React from 'react';
import { Drawer } from 'antd';
import { useState } from 'react';
import NavResponsive from './Nav/navResponsive';
const ContentDrawer = ({ open, OnClose }) => {
    const [close, setClose] = useState(false)
    return (
        <Drawer
            className='Drawer'
            width={250}
            headerStyle={{ display: 'none' }}
            open={open}
            onClose={OnClose}
            title='Menu'
            bodyStyle={{padding: '1rem 0 0', background: '#001529' }}
  
        >
            <NavResponsive/>
        </Drawer>
    );
};

export default ContentDrawer;