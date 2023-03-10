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
import {  Card,  } from 'antd';
import { useInView } from 'react-intersection-observer';
const { Meta } = Card;
const contentStyle = {
    height: '540px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
};
const Playas = () => {
    const { ref:playa1, inView: playa1observer} =useInView({threshold:0.5})
    const { ref:playa2, inView: playa2observer} =useInView({threshold:0.5})
    const { ref:playa3, inView: playa3observer} =useInView({threshold:0.5})
    const { ref:playa4, inView: playa4observer} =useInView({threshold:0.5})
    const { ref:playa5, inView: playa5observer} =useInView({threshold:0.5})
    const { ref:playa6, inView: playa6observer} =useInView({threshold:0.5})
    const { ref:playa7, inView: playa7observer} =useInView({threshold:0.5})
    const { ref:playa8, inView: playa8observer} =useInView({threshold:0.5})
    const { ref:playa9, inView: playa9observer} =useInView({threshold:0.5})
    const { ref:playa10, inView: playa10observer} =useInView({threshold:0.5})
    const { ref:playa11, inView: playa11observer} =useInView({threshold:0.5})
    const { ref:playa12, inView: playa12observer} =useInView({threshold:0.5})
    const { ref:playa13, inView: playa13observer} =useInView({threshold:0.5})
    const { ref:playa14, inView: playa14observer} =useInView({threshold:0.5})  
    return (
            <div style={contentStyle} className="site-card-wrapper-responsive">
           
                        <Card
                            ref={playa1}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa1observer? 'activo': ''}`} alt="example" src={Ensenada} />}
                        >
                            <Meta title="ENSENADA EL TIGRILLO" description="Sus aguas son transparentes de color turquesa" />


                        </Card>

                        <Card
                        ref={playa2}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa2observer? 'activo': ''}`} alt="example" src={Manare} />}
                        >
                            <Meta title="PLAYA MANARE" description="Posee una inmensa pared de piedra espectacular con orillas corroídas" />

                        </Card>


                        <Card
                        ref={playa3}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa3observer? 'activo': ''}`} alt="example" src={Blanca} />}
                        >
                            <Meta title="PLAYA BLANCA" description="Su nombre Blanca lo adopta de sus arenas níveas de fino granulado" />

                        </Card>


                        <Card
                        ref={playa4}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa4observer? 'activo': ''}`} alt="example" src={Canoa} />}
                        >
                            <Meta title="PLAYA LA CANOA" description="Es de gran extensión de playas de aguas cristalinas, arena suave y un poco rojiza" />

                        </Card>


                        <Card
                        ref={playa5}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa5observer? 'activo': ''}`} alt="example" src={Maritas} />}
                        >
                            <Meta title="PLAYA LAS MARITAS" description="Es una playa de aguas cristalinas con tonalidades de verdes" />

                        </Card>


                        <Card
                        ref={playa6}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa6observer? 'activo': ''}`} alt="example" src={Cochaima} />}
                        >
                            <Meta title="PLAYA COCHAIMA" description="Es extensa de aguas cristalinas, cálidas, de olas suaves" />

                        </Card>


                        <Card
                        ref={playa7}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa7observer? 'activo': ''}`} alt="example" src={Colorada} />}
                        >
                            <Meta title="PLAYA COLORADA" description="Es muy visitada por los turistas nacionales e internacionales" />

                        </Card>


                        <Card
                        ref={playa8}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa8observer? 'activo': ''}`} alt="example" src={Horno} />}
                        >
                            <Meta title="PLAYA EL HORNO" description="Es muy visitada por los turistas nacionales e internacionales" />

                        </Card>


                        <Card
                        ref={playa9}
                        hoverable
                            cover={<img className={`imagen-Playas ${playa9observer? 'activo': ''}`} alt="example" src={Arapito} />}
                        >
                            <Meta title="PLAYA ARAPITO" description="Es extensa de aguas cristalinas y calidas" />

                        </Card>


                        <Card
                        ref={playa10}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa10observer? 'activo': ''}`} alt="example" src={Piscina} />}
                        >
                            <Meta title="PLAYA LA PISCINA" description="Es parte de una formacion coralina entre dos islas" />

                        </Card>


                        <Card
                        ref={playa11}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa11observer? 'activo': ''}`} alt="example" src={Vallecito} />}
                        >
                            <Meta title="PLAYA VALLECITO" description="Las aguas son cristalinas y de temperatura agradable" />

                        </Card>


                        <Card
                        ref={playa12}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa12observer? 'activo': ''}`} alt="example" src={Pescador} />}
                        >
                            <Meta title="PLAYA PESCADOR" description="Por su profundidad, esta playa es especial para el disfrute de los niños" />

                        </Card>


                        <Card
                        ref={playa13}

                            hoverable
                            cover={<img className={`imagen-Playas ${playa13observer? 'activo': ''}`} alt="example" src={Hicacos} />}
                        >
                            <Meta title="PLAYA LOS HICACOS" description="La playa está enclavada en una pequeña bahía" />

                        </Card>


                        <Card
                        ref={playa14}
                            hoverable
                            cover={<img className={`imagen-Playas ${playa14observer? 'activo': ''}`} alt="example" src={Santa} />}
                        >
                            <Meta title="PLAYA SANTA CRUZ" description="Es de poca extensión con aguas cristalinas, cálidas, de olas suaves" />

                        </Card>

        
            </div>
    );
};

export default Playas;