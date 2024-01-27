import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

const UserEntryForm = ({ addUserEntry }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        data1: '',
        data2: '',
        data3: '',
        data4: '',
        data5: '',
        data6: '',
    });

    const handleSubmit = () => {
        const timestamp = new Date().toLocaleString();
        const userEntry = { ...userData, timestamp };
        addUserEntry(userEntry);
        setUserData({
            data1: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            data6: '',
        });
        setIsModalOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <section>
            <Button type="primary" onClick={showModal}>
                User qo'shish
            </Button>
            <Modal title="User Entry" onOk={handleSubmit} onCancel={handleCancel}>
                <div>
                    <label>Ismi:</label>
                    <Input type="text" name="data1" value={userData.data1} onChange={handleChange} />
                </div>
                <div>
                    <label>Familiya:</label>
                    <Input type="text" name="data2" value={userData.data2} onChange={handleChange} />
                </div>
                <div>
                    <label>Otchestva:</label>
                    <Input type="text" name="data3" value={userData.data3} onChange={handleChange} />
                </div>
                <div>
                    <label>Manzili:</label>
                    <Input type="text" name="data4" value={userData.data4} onChange={handleChange} />
                </div>
                <div>
                    <label>Telefon raqami:</label>
                    <Input type="text" name="data5" value={userData.data5} onChange={handleChange} />
                </div>
                <div>
                    <label>Ma'lumoti:</label>
                    <Input type="text" name="data6" value={userData.data6} onChange={handleChange} />
                </div>
            </Modal>
        </section>
    );
};

export default UserEntryForm;
