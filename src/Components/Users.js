import React, { useState } from 'react';
import { Button, Input, Modal, Table } from 'antd';

function Users() {
    const [customers, setCustomers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const [data4, setData4] = useState('');
    const [data5, setData5] = useState('');
    const [data6, setData6] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAddCustomer = () => {
        if (data1.trim() !== '') {
            const entryTime = new Date().toLocaleString();
            const newCustomerData = {
                name: data1,
                time: entryTime,
                data2: data2,
                data3: data3,
                data4: data4,
                data5: data5,
                data6: data6,
                // Add other data fields here
            };
            setCustomers([...customers, newCustomerData]);
            setData1('');
            setData2('');
            setData3('');
            setData4('');
            setData5('');
            setData6('');
            setIsModalOpen(false);
        }
    };

    const handleDeleteCustomer = (index) => {
        const updatedCustomers = customers.filter((_, i) => i !== index);
        setCustomers(updatedCustomers);
    };

    const handleEditCustomer = (index, newData) => {
        if (newData) {
            const updatedCustomers = customers.map((customer, i) =>
                i === index ? { ...customer, ...newData } : customer
            );
            setCustomers(updatedCustomers);
        }
    };

    const columns = [
        {
            title: '№',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
            width: 50,
        },
        {
            title: 'Vaqti',
            dataIndex: 'timestamp',
            key: 'timestamp',
            width: 200,
        },
        {
            title: 'Ismi',
            dataIndex: 'data1',
            key: 'data1',
            ellipsis: true,
        },
        {
            title: 'Familiyasi',
            dataIndex: 'data2',
            key: 'data2',
            ellipsis: true,
        },
        {
            title: 'Otasining ismi',
            dataIndex: 'data3',
            key: 'data3',
            ellipsis: true,
        },
        {
            title: 'Manzili',
            dataIndex: 'data4',
            key: 'data4',
            ellipsis: true,
        },
        {
            title: 'Telefon raqami',
            dataIndex: 'data5',
            key: 'data5',
            ellipsis: true,
        },
        {
            title: "Ma'lumoti",
            dataIndex: 'data6',
            key: 'data6',
            ellipsis: true,
        },
        {
            title: "Action",
            render: (_, record, index) => (
                <div>
                    <button onClick={() => handleEditCustomer(index, prompt('Edit customer name:', record.data1))}>
                        Edit
                    </button>
                    <button onClick={() => handleDeleteCustomer(index)}>Delete</button>
                </div>
            )
        },
    ];

    const formattedData = customers.map((entry, index) => ({
        key: index,
        orderNumber: index + 1,
        timestamp: entry.time,
        data1: entry.name,
        data2: entry.data2,
        data3: entry.data3,
        data4: entry.data4,
        data5: entry.data5,
        data6: entry.data6,
    }));

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                User qo'shish
            </Button>
            <Modal title="User Entry" visible={isModalOpen} onOk={handleAddCustomer} onCancel={handleCancel}>
                <div>
                    <label>Ismi:</label>
                    <Input type="text" value={data1} onChange={(e) => setData1(e.target.value)} />
                </div>
                <div>
                    <label>Familiyasi:</label>
                    <Input type="text" value={data2} onChange={(e) => setData2(e.target.value)} />
                </div>
                <div>
                    <label>Manzili:</label>
                    <Input type="text" value={data3} onChange={(e) => setData3(e.target.value)} />
                </div>
                <div>
                    <label>Telefon raqami:</label>
                    <Input type="text" value={data4} onChange={(e) => setData4(e.target.value)} />
                </div>
                <div>
                    <label>Ma'lumoti:</label>
                    <Input type="text" value={data5} onChange={(e) => setData5(e.target.value)} />
                </div>
                <div>
                    <label>Yoshi:</label>
                    <Input type="text" value={data6} onChange={(e) => setData6(e.target.value)} />
                </div>
            </Modal>
            <Table columns={columns} dataSource={formattedData} pagination={{ pageSize: 10 }} />
        </div>
    );
}

export default Users;
