import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker } from 'antd'
const Registro = ({ isModalOpen, handleCancel, handleOk, employe }) => {
    const { Option } = Select;

    const onFormDataChange = (data) => {
        setDataDefault(data);
    };
    const [form] = Form.useForm();
    const [dataDefault, setDataDefault] = useState(null);
    const onOk = async () => {
        form.validateFields().then((values) => {
            handleOk(values)
            setDataDefault(null)
        })
    }
    useEffect(() => {
        if (isModalOpen) {
            if (employe === null) {
                form.resetFields()
            } else {
                setDataDefault({ ...employe })
                form.setFieldsValue({ ...employe })
            }
        }
    }, [isModalOpen])


    return (
        <Modal
            title="Registro"
            open={isModalOpen}
            onOk={onOk}
            onFinish={handleOk}
            onCancel={handleCancel}>
            <Form
                layout={"vertical"}
                form={form}
                onValuesChange={onFormDataChange}
                initialValues={dataDefault}
            >
                <Form.Item
                    label="Nombre completo"
                    name="name"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor introduzca su nombre completo!',
                        },
                    ]}
                >
                    <Input placeholder='ingrese su nombre completo' />
                </Form.Item>

                <Form.Item
                    label="Cedula de identificacion"
                    name="cedula"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor introduzca su cedula de identificacion!',
                        },
                    ]}
                >
                    <Input placeholder='ingrese su cedula' />
                </Form.Item>
                <Form.Item
                    label="Nro. De teléfono"
                    name="telefono"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor introduzca su Nro. de telefono!',
                        },
                    ]}
                >
                    <Input placeholder='ingrese su numero de telefono' />
                </Form.Item>
                <Form.Item name="month-picker" label="Mes de regristro 'Opcional'"  >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Numero de personas"
                    hasFeedback
                    name='cantidad'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor introduzca el numero de personas que iran!',
                        },
                    ]}
                >
                    <Select
                        placeholder="Max:10"
                        allowClear
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Registro;