import React, { useState } from 'react';
import './styles.css'
import { RightOutlined } from '@ant-design/icons'
import { Typography, Card, Col, Row, Button, notification } from 'antd';
import Modal from '../Modal'
import './responsive.css'
import Responsive from './responsive';
import Normal from './normal';
const { Title } = Typography;
const AllServicies = () => {
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
    };

    return (
        <div className='servicios'>
            <div className='titulo-servicios'><Title>Servicios</Title></div>
            <div>
            <Responsive/>
            <Normal/>
            </div>
            <div className='content-button'>
                <Button size='large' className='boton-reserve-ya-servicios' shape="round" type="primary" onClick={() => showModal()} >RESERVE YA<RightOutlined /></Button>
                <Modal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} employe={item} />
            </div>

        </div>



    );
};

export default AllServicies;