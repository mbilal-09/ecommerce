import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
const { Meta } = Card;

export default function ProductCard({ products }) {
    return (
        <div className='flex flex-wrap'>
            {products?.map((data, index) => {
                return (
                    <Link href={`products/${data.id}`} key={index}>
                        <Card
                            className='m-4'
                            style={{
                                width: 300,
                            }}
                            cover={
                                <img
                                    className='h-[300px]'
                                    src={data.image}
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
                            <p className='text-gray-400'>{data.description}</p>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}