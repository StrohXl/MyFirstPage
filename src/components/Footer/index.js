import React from 'react';
import { Layout } from 'antd';
import "./styles.css"
import { Card, } from 'antd';
import './responsive.css'
import Logo from '../../Images/logo-footer.jpg'
import { Typography } from 'antd'
import { Link } from 'react-router-dom';
import { FacebookOutlined, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons'
const { Title } = Typography
const { Footer } = Layout;

function FooterComponet() {

  return <>
    <Footer className="container-footer">
      <div className="site-card-wrapper">

        <Card
          bordered={false}
        >

          <ul>
            <li><Link to='/'> Inicio </Link></li>

            <li><Link to='/Playas'> Playas </Link></li>

            <li><Link to="/Mas-informacion">Mas informacion</Link></li>

            <li> <Link to="/Servicios">Servicios</Link></li>
          </ul>
        </Card>
        <Card bordered={false} >
          <Title level={3} className='titulo-footer1' >Parque nacional </Title>
          <div className='titulo-footer2'>MOCHIMA</div>
          <img className='logo-footer' src={Logo} />
        </Card>
        <Card bordered={false}>
          <Title className='titulo-footer' level={2}>Contactos</Title>
          <ul>
            <li> <a href="https://www.facebook.com/page/103336275745126/search/?q=mochima"><FacebookOutlined /> Agencia de viajes Azantravel</a></li>
            <li><WhatsAppOutlined />+58 4129897380</li>
            <li> <a href="https://www.instagram.com/explore/locations/848723171/parque-nacional-mochima-venezuela/"><InstagramOutlined /> Azantravel</a></li>
          </ul>
        </Card>


      </div>
      <div className="creado">
        PARQUE NACIONAL MOCHIMA ©2022 Created by Xavier Mayora
      </div>
    </Footer>
  </>
}

export default FooterComponet;