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
    <Menu.Item onClick={()=> navigate('/')}><HomeOutlined/>  Inicio</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Servicios')}><RiShip2Line/>  Servicios</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Playas')}><FaUmbrellaBeach/>  Playas</Menu.Item>
    <Menu.Item onClick={()=> navigate('/Mas-informacion')}><BsBook/>  Mas Informacion</Menu.Item>
  </Menu>
   

  );
};

export default Nav;