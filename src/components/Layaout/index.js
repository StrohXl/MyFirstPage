import { Layout, Space } from 'antd';
import React, { useState } from 'react';
import Nav from '../Nav'
import './style.css'
import { BackTop } from 'antd';
import Footer from "../Footer";
import './Responsive.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUmbrellaBeach } from 'react-icons/fa'
import { HomeOutlined, } from '@ant-design/icons'
import { BsBook } from 'react-icons/bs'
import { RiShip2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
const { Header, Content } = Layout;
const Layaout = (props) => {
  const navigate=useNavigate()
  const [click, setClick] = useState(false)


  const navResponsive = () => {
    setClick(!click)
  }
  return (
    <Layout className="layout">

      <Header className='header' >
        <Space>
          <div className='titulo1'>PARQUE NACIONAL MOCHIMA</div>
          <div className='nav-responsive'>
            <ul className={`lista${click ? ' open' : ''}`}>
              <li onClick={()=>{navigate('/'); setClick(false)}}><HomeOutlined /> Inicio</li>
             <li onClick={()=>{navigate('/Servicios'); setClick(false)}}> <RiShip2Line /> Servicios</li>
              <li onClick={()=>{navigate('/Playas'); setClick(false)}}>  <FaUmbrellaBeach /> Playas</li>
              <li onClick={()=>{navigate('/Mas-informacion'); setClick(false)}}> <BsBook /> Mas Informacion</li>
            </ul>
            <div className='GiHamburgerMenu' onClick={navResponsive} ><GiHamburgerMenu /></div>
          </div>
          <Nav className='Nav' />
        </Space>
      </Header>


      <Content className="container-content">
        <div className="content">{props.children}</div>
      </Content>
      <Footer />
      <BackTop className='subir' />
    </Layout>
  );
};

export default Layaout;