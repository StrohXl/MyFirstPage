import React from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import '../Layaout/Responsive.css'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { HomeOutlined, } from '@ant-design/icons'
import { BsBook } from 'react-icons/bs'
import { RiShip2Line } from 'react-icons/ri'

const Nav = () => {
  let navigate = useNavigate();
  
  
  return (
  <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['mail']} className='Nav'>
    <Menu.Item onClick={()=> navigate('/')}><HomeOutlined className='iconoNav'/>  Inicio</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Servicios')}><RiShip2Line className='iconoNav'/>  Servicios</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Playas')}><FaUmbrellaBeach className='iconoNav'/>  Playas</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Mas-informacion')}><BsBook className='iconoNav'/>  Mas Informacion</Menu.Item>
  </Menu>
   

  );
};

export default Nav;