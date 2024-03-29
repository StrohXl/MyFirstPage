import React from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { FaUmbrellaBeach } from 'react-icons/fa'
import { HomeOutlined, } from '@ant-design/icons'
import { BsBook } from 'react-icons/bs'
import { RiShip2Line } from 'react-icons/ri'

const Nav = () => {
  let navigate = useNavigate();
  
  
  return (
  <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['mail']} className='Nav'>
    <Menu.Item onClick={()=> navigate('/MyFirstPage/')}><HomeOutlined className='iconoNav'/>  Inicio</Menu.Item>
    <Menu.Item onClick={()=> navigate('/MyFirstPage/Servicios')}><RiShip2Line className='iconoNav'/>  Servicios</Menu.Item>
    <Menu.Item onClick={()=> navigate('/MyFirstPage/Playas')}><FaUmbrellaBeach className='iconoNav'/>  Playas</Menu.Item>
    <Menu.Item onClick={()=> navigate('/MyFirstPage/Mas-informacion')}><BsBook className='iconoNav'/>  Mas Informacion</Menu.Item>
  </Menu>
   

  );
};

export default Nav;