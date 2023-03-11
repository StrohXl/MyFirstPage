import React from 'react';
import './styles.css'
import { Typography } from 'antd'
import { useInView } from 'react-intersection-observer';
import Responsive from './responsive'
const { Title, Text } = Typography

const Paquetes = () => {
    const { ref: myRef, inView: tituloObservado } = useInView({ threshold: 1 })
    return (
        <div className='paquetes'>
            <div ref={myRef} className='titulo-paquetes'>
                <div className='azul'>
                    <h1 className={`titulofalse${tituloObservado ? ' tituloObservado' : ''}`}>
                        Paquetes
                    </h1>
                </div>
            </div>
      
            <div><Responsive /></div>
        </div>
    );
};

export default Paquetes;