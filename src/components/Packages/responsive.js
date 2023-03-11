import React from 'react';
import { Card, Col, Row } from 'antd';
import './styles.css'
import { Typography } from 'antd'
import { useInView } from 'react-intersection-observer';
const { Title, Text } = Typography

const Responsive = () => {

    const { ref: Package1 , inView:Package1Observado} = useInView({threshold:0.5})
    const { ref: Package2 , inView:Package2Observado} = useInView({threshold:0.5})
    const { ref: Package3 , inView:Package3Observado} = useInView({threshold:0.5})
 
    return (
       
             <Row  gutter={64}>
                <Col  ref={Package1}  className='content-card1'>
                    <Card className={`carta1${ Package1Observado? ' cartaObservada': ''}`}
                    title={'Paquete Estandar: $60'}>
                        <ul>
                            <li>Traslado</li>
                            <li>Comida</li>
                            <li>Recreacion</li>
                            <li>Hidratacion</li>
                        </ul>
                    </Card>
                </Col>
                <Col ref={Package2}  className=''>
                <Card className={`carta1${Package2Observado? ' cartaObservada': ''}`} 
                title={' Paquete Especial: $80'}>
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
                <Col ref={Package3}  >
                <Card  className={`carta1${Package3Observado? ' cartaObservada': ''}`} 
                title={'Paquete Completo: $120'}>
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