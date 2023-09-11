import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

export default function ProductCard({ products }) {
    return (
        <div className='flex'>
            {products?.map((data, index) => {
                return (
                    <Card
                    className='m-4'
                        style={{
                            width: 300,
                        }}
                        key={index}
                        cover={
                            <img
                                alt="example"
                                src={data.imageUrl}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title={data.title}
                            description={data.category}
                        />
                        <p className='mt-4'>Price: {data.price}</p>
                        <p className='text-gray-400'>{data.desc}</p>
                    </Card>
                )
            })}
        </div>
    )
}