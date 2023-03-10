import { Layout, Space, Affix } from 'antd';
import React, { useState, useEffect} from 'react';
import Nav from '../Nav'
import './style.css'
import { BackTop } from 'antd';
import Footer from "../Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation} from 'react-router-dom';
import Drawer from '../Drawer';
const { Header, Content } = Layout;
const Layaout = (props) => {
  const [click, setClick] = useState(false)
  const router = useLocation()
  const navResponsive = () => {
    setClick(!click)
  }
  const cerraDrawer=()=>{
    setClick(false)

  }
  useEffect(()=>{cerraDrawer()},[router])
  return (
    <Layout className="layout">
      <Affix offsetTop={0}>

      <Header className='header' >
        <Space>
          <div className='titulo1'>PARQUE NACIONAL MOCHIMA</div>
          <div className='nav-responsive'>
            <Drawer OnClose={()=>{setClick(!click)}} open={click}/>
            <div className='GiHamburgerMenu' onClick={navResponsive} ><GiHamburgerMenu /></div>
          </div>
          <Nav className='Nav' />
        </Space>
      </Header>
      </Affix>
      <Content className="container-content">
        <div className="content">{props.children}</div>
      </Content>
      <Footer />
      <BackTop className='subir' />
    </Layout>
  );
};

export default Layaout;