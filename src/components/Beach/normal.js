import React from 'react';
import './styles.css'
import Ensenada from '../../Images/ensenadaeltigrillo_500x540.jpg'
import Manare from '../../Images/playamanare_500x540.jpg'
import Blanca from '../../Images/playablanca_500x540.jpg'
import Canoa from '../../Images/playalacanoa_500x540.jpg'
import Maritas from '../../Images/playalasmaritas_500x540.jpg'
import Cochaima from '../../Images/playacochaima_500x540.jpg'
import Colorada from '../../Images/playacolorada_500x540.jpg'
import Horno from '../../Images/playaelhorno_500x540.jpg'
import { useEffect } from 'react';
import Arapito from '../../Images/playaarapito_500x540.jpg'
import Piscina from '../../Images/playalapiscina_500x540.jpg'
import Vallecito from '../../Images/playavallecito_500x540.jpg'
import Pescador from '../../Images/playapescador_500x540.jpg'
import Hicacos from '../../Images/playaloshicacos_500x540.jpg'
import Santa from '../../Images/playasantacruz_500x540.jpg'
import { Card, Col, Row, } from 'antd';
import { useInView } from 'react-intersection-observer';
const { Meta } = Card;
const Beach = () => {
    const LoadData = () => {
        window.scroll(0, 0)
    }
    useEffect(() => { LoadData() }, [])
    const { ref: imageNormal1, inView: imagenormalObserver1 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal2, inView: imagenormalObserver2 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal3, inView: imagenormalObserver3 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal4, inView: imagenormalObserver4 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal5, inView: imagenormalObserver5 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal6, inView: imagenormalObserver6 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal7, inView: imagenormalObserver7 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal8, inView: imagenormalObserver8 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal9, inView: imagenormalObserver9 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal10, inView: imagenormalObserver10 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal11, inView: imagenormalObserver11 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal12, inView: imagenormalObserver12 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal13, inView: imagenormalObserver13 } = useInView({ threshold: 0.5 })
    const { ref: imageNormal14, inView: imagenormalObserver14 } = useInView({ threshold: 0.5 })
    return (
        <div  className="site-card-wrapper">
            <Row gutter={16} className='servicios-row'>
                <Col ref={imageNormal1}  >
                    <Card

                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver1 ? ' aumentar' : ''}`} alt="example" src={Ensenada} />}
                    >
                        <Meta title="ENSENADA EL TIGRILLO" description="Sus aguas son transparentes de color turquesa" />


                    </Card>
                </Col>
                <Col ref={imageNormal2} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver2 ? ' aumentar' : ''}`} alt="example" src={Manare} />}
                    >
                        <Meta title="PLAYA MANARE" description="Posee una inmensa pared de piedra espectacular con orillas corroídas" />

                    </Card>
                </Col>
                <Col ref={imageNormal3} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver3 ? ' aumentar' : ''}`} alt="example" src={Blanca} />}
                    >
                        <Meta title="PLAYA BLANCA" description="Su nombre Blanca lo adopta de sus arenas níveas de fino granulado" />

                    </Card>
                </Col>
                <Col ref={imageNormal4} >
                    <Card

                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver4 ? ' aumentar' : ''}`} alt="example" src={Canoa} />}
                    >
                        <Meta title="PLAYA LA CANOA" description="Es de gran extensión de playas de aguas cristalinas, arena suave y un poco rojiza" />

                    </Card>
                </Col>
                <Col ref={imageNormal5} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver5 ? ' aumentar' : ''}`} alt="example" src={Maritas} />}
                    >
                        <Meta title="PLAYA LAS MARITAS" description="Es una playa de aguas cristalinas con tonalidades de verdes" />

                    </Card>
                </Col>
                <Col ref={imageNormal6} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver6 ? ' aumentar' : ''}`} alt="example" src={Cochaima} />}
                    >
                        <Meta title="PLAYA COCHAIMA" description="Es extensa de aguas cristalinas, cálidas, de olas suaves" />

                    </Card>
                </Col>
                <Col ref={imageNormal7} >
                    <Card

                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver7 ? ' aumentar' : ''}`} alt="example" src={Colorada} />}
                    >
                        <Meta title="PLAYA COLORADA" description="Es muy visitada por los turistas nacionales e internacionales" />

                    </Card>
                </Col>
                <Col ref={imageNormal8} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver8 ? ' aumentar' : ''}`} alt="example" src={Horno} />}
                    >
                        <Meta title="PLAYA EL HORNO" description="Es muy visitada por los turistas nacionales e internacionales" />

                    </Card>
                </Col>
                <Col ref={imageNormal9} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver9 ? ' aumentar' : ''}`} alt="example" src={Arapito} />}
                    >
                        <Meta title="PLAYA ARAPITO" description="Es extensa de aguas cristalinas y calidas" />

                    </Card>
                </Col>
                <Col ref={imageNormal10} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver10 ? ' aumentar' : ''}`} alt="example" src={Piscina} />}
                    >
                        <Meta title="PLAYA LA PISCINA" description="Es parte de una formacion coralina entre dos islas" />

                    </Card>
                </Col>
                <Col ref={imageNormal11} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver11 ? ' aumentar' : ''}`} alt="example" src={Vallecito} />}
                    >
                        <Meta title="PLAYA VALLECITO" description="Las aguas son cristalinas y de temperatura agradable" />

                    </Card>
                </Col>
                <Col ref={imageNormal12} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver12 ? ' aumentar' : ''}`} alt="example" src={Pescador} />}
                    >
                        <Meta title="PLAYA PESCADOR" description="Por su profundidad, esta playa es especial para el disfrute de los niños" />

                    </Card>
                </Col>
                <Col ref={imageNormal13} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver13 ? ' aumentar' : ''}`} alt="example" src={Hicacos} />}
                    >
                        <Meta title="PLAYA LOS HICACOS" description="La playa está enclavada en una pequeña bahía" />

                    </Card>
                </Col>
                <Col ref={imageNormal14} >
                    <Card
                        hoverable
                        cover={<img className={`imagen-servicios ${imagenormalObserver14 ? ' aumentar' : ''}`} alt="example" src={Santa} />}
                    >
                        <Meta title="PLAYA SANTA CRUZ" description="Es de poca extensión con aguas cristalinas, cálidas, de olas suaves" />

                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Beach;