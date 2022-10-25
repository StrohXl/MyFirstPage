import React from 'react';
import '../Services/styles.css'
import { Carousel, Card,} from 'antd';
import alojamiento from '../../Images/alojamiento.jpg'
import Boda from '../../Images/boda1.jpg'
import Pabellon from '../../Images/comida4.jpg'
import PlayaBlanca from '../../Images/playablanca_500x540.jpg'
import Seguro from '../../Images/GetImage.jpeg'
import campamento from '../../Images/arton4358.jpg'
import traslado from '../../Images/guia1.jpg'
import guia from '../../Images/amavcapacitara.jpg'
import eventos from '../../Images/evento1.jpg'
import '../Services/responsive.css'
const { Meta } = Card;
const contentStyle = {
    height: '540px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
};

const CarouselResponsive = () => { 
    return (
            <Carousel autoplay >
                <div >
                    <div style={contentStyle} className="site-card-wrapper">

                        <Card

                            hoverable
                            cover={<img alt="example" src={alojamiento} />}
                        >
                            <Meta title="Alojamiento" description="Hospedese en la posada isla piscina mochima" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>

                        </Card>
                    </div>
                </div>
                <div >
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={Boda} />}
                        >
                            <Meta title="Planificador de boda" description="Ten la mejor Boda de tu vida" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div >
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={Pabellon} />}
                        >
                            <Meta title="Alimentos" description="Pruebe el gran legado multi-cultural sucrense" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div >
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card

                            hoverable
                            cover={<img alt="example" src={PlayaBlanca} />}
                        >
                            <Meta title="Renta de botes" description="Botes reservados para viajar a cualquier playa  que desee" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div >
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={Seguro} />}
                        >
                            <Meta title="Seguro de viajes" description="Viaje con toda confianza a su destino" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={campamento} />}
                        >
                            <Meta title="Excursiones" description="Explore la isla para terminar acampando al lado de las bellas olas" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={traslado} />}
                        >
                            <Meta title="Traslado" description="Cuente con el mejor traslado para ir y salir del areopuerto" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={guia} />}
                        >
                            <Meta title="Guia de turista" description="Disfrute de la mejor recepción, coordinación y orientación" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="site-card-wrapper">
                        <Card
                            hoverable
                            cover={<img alt="example" src={eventos} />}
                        >
                            <Meta title="Eventos" description="Diviertase y disfrute de los eventos que ofrecemos" />
                            <div className='link'><a href="/Servicios">Mas +</a></div>
                        </Card>

                    </div>
                </div>

            </Carousel>
    );

};

export default CarouselResponsive;