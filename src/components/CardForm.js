import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import ProductCard from './ProductCard';

export default function CardForm() {
    const [cardData, setCardData] = useState([]);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        cardData.push(values);
        setCardData([...cardData]);
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                className='mt-6'
                name="control-hooks"
                layout='inline'
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 15,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    className='m-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your title!',
                        },
                    ]}
                >
                    <Input placeholder='Service Title' />
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="imageUrl"
                    className='m-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your image url!',
                        },
                    ]}
                >
                    <Input placeholder='Image Url' />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    className='m-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                    ]}
                >
                    <Input type='number' placeholder='Price' />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    className='m-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your category!',
                        },
                    ]}
                >
                    <Input placeholder='Category' />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="desc"
                    className='m-4'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your description!',
                        },
                    ]}
                >
                    <Input placeholder='Description' />
                </Form.Item>

                <Form.Item
                    className='m-4'
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button htmlType="submit" className='border-0 bg-green-600 text-white hover:text-white'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <ProductCard products={cardData} />    
        </>
    )
}