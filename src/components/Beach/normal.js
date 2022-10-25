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
import Arapito from '../../Images/playaarapito_500x540.jpg'
import Piscina from '../../Images/playalapiscina_500x540.jpg'
import Vallecito from '../../Images/playavallecito_500x540.jpg'
import Pescador from '../../Images/playapescador_500x540.jpg'
import Hicacos from '../../Images/playaloshicacos_500x540.jpg'
import Santa from '../../Images/playasantacruz_500x540.jpg'
import { Card, Col, Row,} from 'antd';
import './responsive.css'
import { useInView } from 'react-intersection-observer';
const { Meta } = Card;

const contentStyle = {
    height: '540px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
};
const Normal = () => {

    const { ref:playa1, inView: playa1observer} =useInView({threshold:0.5})
    const { ref:playa2, inView: playa2observer} =useInView({threshold:0.5})
    const { ref:playa3, inView: playa3observer} =useInView({threshold:0.5})
    const { ref:playa4, inView: playa4observer} =useInView({threshold:0.5})
    const { ref:playa5, inView: playa5observer} =useInView({threshold:0.5})
    return (
            <div style={contentStyle} className="site-card-wrapper">
                <Row gutter={16}>
                    <Col ref={playa1} span={7}>
                        <Card
                            
                            hoverable
                            cover={<img className={`imagen-Playas ${playa1observer? 'activo': ''}`} alt="example" src={Ensenada} />}
                        >
                            <Meta title="ENSENADA EL TIGRILLO" description="Sus aguas son transparentes de color turquesa" />


                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa1observer? 'activo': ''}`} alt="example" src={Manare} />}
                        >
                            <Meta title="PLAYA MANARE" description="Posee una inmensa pared de piedra espectacular con orillas corroídas" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa1observer? 'activo': ''}`} alt="example" src={Blanca} />}
                        >
                            <Meta title="PLAYA BLANCA" description="Su nombre Blanca lo adopta de sus arenas níveas de fino granulado" />

                        </Card>
                    </Col>
                    <Col ref={playa2} span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-Playas ${playa2observer? 'activo': ''}`} alt="example" src={Canoa} />}
                        >
                            <Meta title="PLAYA LA CANOA" description="Es de gran extensión de playas de aguas cristalinas, arena suave y un poco rojiza" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa2observer? 'activo': ''}`} alt="example" src={Maritas} />}
                        >
                            <Meta title="PLAYA LAS MARITAS" description="Es una playa de aguas cristalinas con tonalidades de verdes" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa2observer? 'activo': ''}`} alt="example" src={Cochaima} />}
                        >
                            <Meta title="PLAYA COCHAIMA" description="Es extensa de aguas cristalinas, cálidas, de olas suaves" />

                        </Card>
                    </Col>
                    <Col ref={playa3} span={7}>
                        <Card

                            hoverable
                            cover={<img className={`imagen-Playas ${playa3observer? 'activo': ''}`} alt="example" src={Colorada} />}
                        >
                            <Meta title="PLAYA COLORADA" description="Es muy visitada por los turistas nacionales e internacionales" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa3observer? 'activo': ''}`} alt="example" src={Horno} />}
                        >
                            <Meta title="PLAYA EL HORNO" description="Es muy visitada por los turistas nacionales e internacionales" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa3observer? 'activo': ''}`} alt="example" src={Arapito} />}
                        >
                            <Meta title="PLAYA ARAPITO" description="Es extensa de aguas cristalinas y calidas" />

                        </Card>
                    </Col>
                    <Col ref={playa4} span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa4observer? 'activo': ''}`} alt="example" src={Piscina} />}
                        >
                            <Meta title="PLAYA LA PISCINA" description="Es parte de una formacion coralina entre dos islas" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa4observer? 'activo': ''}`} alt="example" src={Vallecito} />}
                        >
                            <Meta title="PLAYA VALLECITO" description="Las aguas son cristalinas y de temperatura agradable" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa4observer? 'activo': ''}`} alt="example" src={Pescador} />}
                        >
                            <Meta title="PLAYA PESCADOR" description="Por su profundidad, esta playa es especial para el disfrute de los niños" />

                        </Card>
                    </Col>
                    <Col ref={playa5}span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa5observer? 'activo': ''}`} alt="example" src={Hicacos} />}
                        >
                            <Meta title="PLAYA LOS HICACOS" description="La playa está enclavada en una pequeña bahía" />

                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            hoverable
                            cover={<img className={`imagen-Playas ${playa5observer? 'activo': ''}`} alt="example" src={Santa} />}
                        >
                            <Meta title="PLAYA SANTA CRUZ" description="Es de poca extensión con aguas cristalinas, cálidas, de olas suaves" />

                        </Card>
                    </Col>
                </Row>
            </div>      
    );
};

export default Normal;