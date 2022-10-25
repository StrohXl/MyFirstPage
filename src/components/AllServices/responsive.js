import React from 'react';
import './styles.css'
import { Card} from 'antd';
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
const Responsive = () => {
   
    const { ref: image, inView: imageObserver } = useInView({ threshold: 0.5 })
    const { ref: image1, inView: imageObserver1 } = useInView({ threshold: 0.5 })
    const { ref: image2, inView: imageObserver2 } = useInView({ threshold: 0.5 })
    const { ref: image3, inView: imageObserver3 } = useInView({ threshold: 0.5 })
    const { ref: image4, inView: imageObserver4 } = useInView({ threshold: 0.5 })
    const { ref: image5, inView: imageObserver5 } = useInView({ threshold: 0.5 })
    const { ref: image6, inView: imageObserver6 } = useInView({ threshold: 0.5 })
    const { ref: image7, inView: imageObserver7 } = useInView({ threshold: 0.5 })
    const { ref: image8, inView: imageObserver8 } = useInView({ threshold: 0.5 })
    const { ref: image9, inView: imageObserver9 } = useInView({ threshold: 0.5 })
    const { ref: image10, inView: imageObserver10 } = useInView({ threshold: 0.5 })
    const { ref: image11, inView: imageObserver11 } = useInView({ threshold: 0.5 })
    
    return (
            <div style={contentStyle} className="site-card-wrapper-responsive">

                <Card
                    ref={image}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver ? ' aumentar' : ''}`} alt="example" src={alojamiento} />}
                >
                    <Meta title="Alojamiento" description="Hospedese en la posada isla piscina mochima" />


                </Card>

                <Card
                    ref={image1}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver1 ? ' aumentar' : ''}`} alt="example" src={Boda} />}
                >
                    <Meta title="Planificador de boda" description="Ten la mejor Boda de tu vida" />

                </Card>

                <Card
                    ref={image2}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver2 ? ' aumentar' : ''}`} alt="example" src={Pabellon} />}
                >
                    <Meta title="Alimentos" description="Pruebe el gran legado multi-cultural sucrense" />

                </Card>

                <Card
                    ref={image3}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver3 ? ' aumentar' : ''}`} alt="example" src={PlayaBlanca} />}
                >
                    <Meta title="Renta de botes" description="Botes reservados para viajar a cualquier playa  que desee" />

                </Card>

                <Card
                    ref={image4}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver4 ? ' aumentar' : ''}`} alt="example" src={Seguro} />}
                >
                    <Meta title="Seguro de viajes" description="Viaje con toda confianza a su destino" />

                </Card>

                <Card
                    ref={image5}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver5 ? ' aumentar' : ''}`} alt="example" src={campamento} />}
                >
                    <Meta title="Excursiones" description="Explore la isla para terminar acampando al lado de las bellas olas" />

                </Card>

                <Card
                    ref={image6}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver6 ? ' aumentar' : ''}`} alt="example" src={traslado} />}
                >
                    <Meta title="Traslado" description="Cuente con el mejor traslado" />

                </Card>

                <Card
                    ref={image7}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver7 ? ' aumentar' : ''}`} alt="example" src={guia} />}
                >
                    <Meta title="Guia de turista" description="Disfrute de la mejor recepción, coordinación y orientación" />

                </Card>

                <Card
                    ref={image8}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver8 ? ' aumentar' : ''}`} alt="example" src={eventos} />}
                >
                    <Meta title="Eventos" description="Diviertase y disfrute de los eventos que ofrecemos" />

                </Card>

                <Card
                    ref={image9}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver9 ? ' aumentar' : ''}`} alt="example" src={Bebida} />}
                >
                    <Meta title="Hidratacion" description="Ofrecemos Bebidas, Refrescos, Agua" />

                </Card>

                <Card
                    ref={image10}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver10 ? ' aumentar' : ''}`} alt="example" src={Recreacion} />}
                >
                    <Meta title="Recreacion" description="Pruebe todas las actividades y diviertase como nunca" />

                </Card>

                <Card
                    ref={image11}
                    hoverable
                    cover={<img className={`imagen-servicios${imageObserver11 ? ' aumentar' : ''}`} alt="example" src={Buceo} />}
                >
                    <Meta title="Buceo" description="Explorara toda la playa con el equipo de buceo que ofrecemos" />

                </Card>


            </div>
    );
};

export default Responsive;