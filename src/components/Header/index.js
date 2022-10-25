import React,{useState} from 'react';
import {RightOutlined} from '@ant-design/icons'
import { Button } from 'antd';
import Modal from '../Modal'
import './responsive.css'
import './styles.css'
import { Typography, notification } from 'antd';
const { Title } = Typography;
const Header = () => {
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
        <div className='parte1'>
            <div className='titulo-header'>
            <Title className='title' level={1}> Explora Mochima el centro turístico por excelencia</Title>
            <Title className='title' level={4}>Vive tu mejor experiencia en toda la vida explorando y disfrutando de uno de los mejores parques nacionales de Venezuela</Title>

            <Button size='large' className='boton-reserve-ya' shape="round" type="primary" onClick={() =>showModal()} >RESERVE YA<RightOutlined/></Button>
            </div>
            <Modal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} employe={item} />
        </div>
    );
};

export default Header;