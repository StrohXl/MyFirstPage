import React from 'react';
import './styles.css'
import {  Card, Col, Row, } from 'antd';
import alojamiento from '../../Images/alojamiento.jpg'
import Boda from '../../Images/boda1.jpg'
import Pabellon from '../../Images/comida4.jpg'
import Recreacion from '../../Images/actividad4.jpg'
import PlayaBlanca from '../../Images/playablanca_500x540.jpg'
import Seguro from '../../Images/GetImage.jpeg'
import campamento from '../../Images/arton4358.jpg'
import traslado from '../../Images/guia1.jpg'
import guia from '../../Images/amavcapacitara.jpg'
import eventos from '../../Images/evento1.jpg'
import Bebida from '../../Images/Bebida.jpg'
import Buceo from '../../Images/actividad6.jpg'
import { useInView } from 'react-intersection-observer';
import './responsive.css'
const { Meta } = Card;

const contentStyle = {
    height: '540px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
};
const Normal = () => {
    const { ref: imageNormal1, inView: imagenormalObserver1 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal2, inView: imagenormalObserver2 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal3, inView: imagenormalObserver3 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal4, inView: imagenormalObserver4 } = useInView({ threshold: 0.5 })
    
    return ( 
            <div style={contentStyle} className="site-card-wrapper">
                <Row gutter={16} className='servisios-row'>
                    <Col ref={imageNormal1} span={7}>
                        <Card


                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver1 ? ' aumentar' : ''}`} alt="example" src={alojamiento} />}
                        >
                            <Meta title="Alojamiento" description="Hospedese en la posada isla piscina mochima" />


                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver1 ? ' aumentar' : ''}`} alt="example" src={Boda} />}
                        >
                            <Meta title="Planificador de boda" description="Ten la mejor Boda de tu vida" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver1 ? ' aumentar' : ''}`} alt="example" src={Pabellon} />}
                        >
                            <Meta title="Alimentos" description="Pruebe el gran legado multi-cultural sucrense" />

                        </Card>
                    </Col>
                    <Col ref={imageNormal2} span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver2 ? ' aumentar' : ''}`} alt="example" src={PlayaBlanca} />}
                        >
                            <Meta title="Renta de botes" description="Botes reservados para viajar a cualquier playa  que desee" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver2 ? ' aumentar' : ''}`} alt="example" src={Seguro} />}
                        >
                            <Meta title="Seguro de viajes" description="Viaje con toda confianza a su destino" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver2 ? ' aumentar' : ''}`} alt="example" src={campamento} />}
                        >
                            <Meta title="Excursiones" description="Explore la isla para terminar acampando al lado de las bellas olas" />

                        </Card>
                    </Col>
                    <Col ref={imageNormal3} span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver3 ? ' aumentar' : ''}`} alt="example" src={traslado} />}
                        >
                            <Meta title="Traslado" description="Cuente con el mejor traslado " />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver3 ? ' aumentar' : ''}`} alt="example" src={guia} />}
                        >
                            <Meta title="Guia de turista" description="Disfrute de la mejor recepci??n, coordinaci??n y orientaci??n" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver3 ? ' aumentar' : ''}`} alt="example" src={eventos} />}
                        >
                            <Meta title="Eventos" description="Diviertase y disfrute de los eventos que ofrecemos" />

                        </Card>
                    </Col>
                    <Col ref={imageNormal4} span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver4 ? ' aumentar' : ''}`} alt="example" src={Bebida} />}
                        >
                            <Meta title="Hidratacion" description="Ofrecemos Bebidas, Refrescos, Agua" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver4 ? ' aumentar' : ''}`} alt="example" src={Recreacion} />}
                        >
                            <Meta title="Recreacion" description="Pruebe todas las actividades y diviertase como nunca" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-servicios${imagenormalObserver4 ? ' aumentar' : ''}`} alt="example" src={Buceo} />}
                        >
                            <Meta title="Buceo" description="Explorara toda la playa con el equipo de buceo que ofrecemos" />

                        </Card>
                    </Col>
                </Row>
            </div>
    );
};

export default Normal;