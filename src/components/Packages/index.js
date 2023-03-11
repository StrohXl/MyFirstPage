import React from 'react';
import { Card, Col, Row } from 'antd';
import './styles.css'
import { Typography } from 'antd'
import { useInView } from 'react-intersection-observer';
import Responsive from './responsive'
const { Title, Text } = Typography

const Paquetes = () => {
    const { ref: myRef, inView: tituloObservado } = useInView({ threshold: 1 })
    const { ref: Packages, inView: PackagesObservado } = useInView({ threshold: 0.5 })
    return (
        <div className='paquetes'>
            <div ref={myRef} className='titulo-paquetes'>
                <div className='azul'>
                    <h1 className={`titulofalse${tituloObservado ? ' tituloObservado' : ''}`}>
                        Paquetes
                    </h1>
                </div>
            </div>
            <Row ref={Packages} gutter={16}>
                <Col span={7} className='content-card1'>
                    <Card className={`carta1${PackagesObservado ? ' cartaObservada' : ''}`}
                        title={'Paquete Estandar: $60'}>
                        <ul>
                            <li>Traslado</li>
                            <li>Comida</li>
                            <li>Recreacion</li>
                            <li>Hidratacion</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={7}>
                    <Card className={`carta1${PackagesObservado ? ' cartaObservada' : ''}`}
                        title={'Paquete Especial: $80 '}>
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
                    <Card
                        className={`carta1${PackagesObservado ? ' cartaObservada' : ''}`}
                        title={'Paquete Completo:  $120'}>
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
            <div><Responsive /></div>
        </div>
    );
};

export default Paquetes;