import React from 'react';
import { Table } from 'antd';

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
];

const UserEntryList = ({ userEntries }) => {
    const formattedData = userEntries.map((entry, index) => ({
        key: index,
        orderNumber: index + 1,
        timestamp: entry.timestamp,
        data1: entry.data1,
        data2: entry.data2,
        data3: entry.data3,
        data4: entry.data4,
        data5: entry.data5,
        data6: entry.data6,
    }));

    return (
        <div>
            <h2>User ma'lumotlari</h2>
            <Table columns={columns} dataSource={formattedData} pagination={{ pageSize: 10 }} />
        </div>
    );
};

export default UserEntryList;
