import { FC } from 'react';
import { Button, Form, Input } from 'antd';

type onSubmit = {
    name: string;
        username: string; 
        email: string;
} 

const UserDetailPage: FC<{onSubmit?:(values: onSubmit) => void}> = ({onSubmit}) => {
    const onFinish = (values: onSubmit) => {
        if(onSubmit) onSubmit(values);
    };


    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Username" name="username">
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input />
            </Form.Item>

            <Button htmlType='submit'>Submit</Button>
        </Form>
    );
};

export default UserDetailPage;
