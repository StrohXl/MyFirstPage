import React from 'react';
import { Card, Col, Row } from 'antd';
import './styles.css'
import { Typography } from 'antd'
import './responsive.css' 
import { useInView } from 'react-intersection-observer';
import Responsive from './responsive'
import { Link } from 'react-router-dom';
const { Title, Text } = Typography

const Paquetes = () => {  
    const { ref: myRef , inView:tituloObservado} = useInView({threshold:1})
    const { ref: Packages , inView:PackagesObservado} = useInView({threshold:0.5})
    return (  
        <div className='paquetes'>
            <div ref={myRef} className='titulo-paquetes'><div className='azul'><Title className={`titulofalse${ tituloObservado?' tituloObservado':''}`}>Paquetes</Title> </div></div>
            <Row ref={Packages} gutter={16}>
                <Col span={7} className='content-card1'>
                    <Card className={`carta1${ PackagesObservado? ' carta1Observada': ''}`}
                    title={<Title level={2}>Paquete Estandar: 
                    <Text className='precio'>$60</Text>
                    </Title>}>
                        <ul>
                            <li>Traslado</li>
                            <li>Comida</li>
                            <li>Recreacion</li>
                            <li>Hidratacion</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={7}>
                <Card className={`carta2${PackagesObservado? ' carta2Observada': ''}`} 
                 title={<Title level={2}>
                    Paquete Especial: 
                    <Text className='precio'>$80</Text>
                    </Title>}>
                        <ul>
                            <li>Traslado</li>
                            <li>Comida</li>
                            <li>Recreacion</li>
                            <li>Hidratacion</li>
                            <li>Guia turistico</li>
                            <li>Baños y Duchas</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={7}>
                <Card className={`carta3${PackagesObservado? ' carta3Observada': ''}`} title={<Title level={2}>Paquete Completo: <Text className='precio'>$120</Text></Title>}>
                        <ul>
                            <li>Traslado</li>
                            <li>Comida</li>
                            <li>Recreacion</li>
                            <li>Hidratacion</li>
                            <li>Guia turistico</li>
                            <li>Baños y Duchas</li>
                            <li>Alojamiento por dos dias</li>
                            <li>Atencion perzonalizada</li>
                            <li>Fotos dentro y fuera del agua</li>
                            <li>Seguro de viajes</li>
                        </ul>
                    </Card>
                </Col>
            </Row>
            <div><Responsive/></div>
        </div>
    );
};

export default Paquetes;