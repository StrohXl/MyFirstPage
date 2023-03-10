import React, { useState } from 'react';
import './styles.css'
import { RightOutlined } from '@ant-design/icons'
import { Typography, Button, notification } from 'antd';
import Modal from '../Modal'
import Normal from './normal'
import Responsive from './responsive'
const { Title } = Typography;
const Playas = () => {
    const [item, setItem] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setItem(null)
        setIsModalOpen(true);
    };
    const Notificacion = (message) => {
        notification.success({
            message: 'bien hecho',
            description: message,
            placement: 'top',
        });
    };
    const nuevoRegistro = async (payload) => {
    
        Notificacion('Su información fue registrada, un agente autorizado se contactara vía WhatsApp para confirmar el pago y la reservación')
    }
    const handleOk = async (payload) => {
        nuevoRegistro(payload)
        handleCancel();
    };
    const handleCancel = () => {
        setItem(null)
        setIsModalOpen(false);
    }

    return (
        <div className='Playas'>
            <div className='titulo-Playas'><Title>Playas</Title></div>
            <div className='playasContent'>
                <Normal />
                <Responsive />
            </div>
            <div className='content-button'>
                <Button size='large' className='boton-reserve-ya-Playas' shape="round" type="primary" onClick={() => showModal()} >RESERVE YA<RightOutlined /></Button>
                <Modal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} employe={item} />
            </div>
        </div>



    );
};

export default Playas;