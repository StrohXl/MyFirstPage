import React from 'react';
import { Col, Row, Layout } from 'antd';
import "./styles.css"
import { Card, } from 'antd';
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
      <Row style={{ justifyContent: 'center', gap: '1rem'}}>
        <Col>
        <ul>
            <li><Link to='/MyFirstPage/'> Inicio </Link></li>

            <li><Link to='/MyFirstPage/Playas'> Playas </Link></li>

            <li><Link to="/MyFirstPage/Mas-informacion">Mas informacion</Link></li>

            <li> <Link to="/MyFirstPage/Servicios">Servicios</Link></li>
          </ul>
        </Col>
        <Col>
        <h1 className='titulo-footer2' >PARQUE NACIONAL MOCHIMA</h1>
          <img className='logo-footer' src={Logo} />
        </Col>
        <Col>
        <Title className='titulo-footer' level={4}>Contactos</Title>
          <ul>
            <li> <a href="https://www.facebook.com/page/103336275745126/search/?q=mochima"><FacebookOutlined /> Agencia de viajes Azantravel</a></li>
            <li><WhatsAppOutlined />+58 4129897380</li>
            <li> <a href="https://www.instagram.com/explore/locations/848723171/parque-nacional-mochima-venezuela/"><InstagramOutlined /> Azantravel</a></li>
          </ul>
        </Col>
      </Row>

      </div>
      <div className="creado">
        PARQUE NACIONAL MOCHIMA ©2022 Created by Xavier Mayora
      </div>
    </Footer>
  </>
}

export default FooterComponet;