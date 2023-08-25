import React, { useEffect, useState } from 'react'
import Cardbox3 from './Cardbox3';
import { Button, Table } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { DeleteOutlined } from '@ant-design/icons';

function Cart() {
   
    const columns = [
        {
            title: 'Product',
            dataIndex: 'Img',
            render:  (Img) => <img src={Img} />
        },
        {
            title:'Title',
            dataIndex: 'Heading',
            key: 'Heading',
        },
        {
            title:'Info',
            dataIndex: 'ProductInfo',
            key: 'ProductInfo',
        },
        {
            title: 'Price',
            dataIndex: 'Price2',
            key: 'Price2',
        },
        {
            title:'Remove',
            dataIndex:'Remove',
            render: (Icon) => <DeleteOutlined />
        }
    ]

    const data = JSON.parse(localStorage.getItem("setItem"));

    console.log("cartData", data)
    if (data) {
    return (
        <div>
        <Table columns={columns} dataSource={data} />
        </div>
    )
    }
    else {
        return(
            <div>Your Cart is empty ~~</div>
        )
    }
}

export default Cart