import React,{useState,useEffect,useRef} from 'react';
import { Card, Col, Row } from 'antd';
import './styles.css'
import { Typography } from 'antd'
import './responsive.css' 
import { useInView } from 'react-intersection-observer';
const { Title, Text } = Typography

const Responsive = () => {

    const { ref: Package1 , inView:Package1Observado} = useInView({threshold:0.5})
    const { ref: Package2 , inView:Package2Observado} = useInView({threshold:0.5})
    const { ref: Package3 , inView:Package3Observado} = useInView({threshold:0.5})
 
    return (
       
 
             <Row  gutter={64}>
                <Col  ref={Package1}  span={5} className='content-card1'>
                    <Card className={`carta1${ Package1Observado? ' carta1Observada': ''}`}
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
                <Col ref={Package2}  span={6.5} className=''>
                <Card className={`carta2${Package2Observado? ' carta2Observada': ''}`} 
                title={<Title level={2}>Paquete Especial: <Text className='precio'>$80</Text></Title>}>
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
                <Col ref={Package3}  span={10}>
                <Card  className={`carta3${Package3Observado? ' carta3Observada': ''}`} title={<Title level={2}>Paquete Completo: <Text className='precio'>$120</Text></Title>}>
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
      
    );
};

export default Responsive;