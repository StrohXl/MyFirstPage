import React from 'react';
import './styles.css'
import { Typography} from 'antd';
import CarouselResponsive from '../Carousel/CarouselResponsive';
import Carousel from '../Carousel/Carousel';
const { Title } = Typography;
const Servicies = () => {
    
    return (

        <div className='servicies'>
            <div className='titulo-servicies'><Title>Servicios</Title></div>
            <div>
            <Carousel/>
            <CarouselResponsive/>
            </div>
        </div>
    );

};

export default Servicies;