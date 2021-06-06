import { useForm, Controller } from 'react-hook-form'
import { Button, Input, Row } from 'antd'
import { Link } from 'react-router-dom'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  
  const validateMessages = {
    required: '${label} is required!',
    string: {
      range: '${label} must be between ${min} and ${max}'
    }
  }

const CreatePost = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log('onSubmit: ', data);
    console.log('Createpost : ')
    console.log('control: ', control);

    const onFinish = (values) => {
        console.log(values);
      }

    return (
        <Row justify='center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='post'
                    control={control}
                    defaultValue=''
                    rules={{ 
                        required: true,
                        maxLength: 10 }}
                    render={({ field }) => <Input {...field} />}
                />
                <Controller
                    name='content'
                    control={control}
                    defaultValue=''
                    rules={{ 
                        required: true,
                        maxLength: 100 }}
                    render={({ field }) => <Input.TextArea {...field} />}
                />
                <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                <Button 
                    type='primary'
                    style={{
                        marginLeft: '100px',
                        marginTop: '50px'}}>
                    <Link to='/'>
                        Назад
                    </Link>
                </Button>                
            </form>   
        </Row>  
    )
}

export default CreatePost

{/* <Form 
                style={{maxWidth: '70%'}}
                {...layout} 
                name='nest-messages' 
                onFinish={onFinish} 
                validateMessages={validateMessages}>
                <Form.Item
                    name={['post', 'title']}
                    label='Title'
                    rules={[
                    {
                        required: true,
                        type: 'string',
                        min: 1,
                        max: 10
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name={['post', 'content']} 
                    label='Content'
                    rules={[
                    {
                        required: true,
                        type: 'string',
                        min: 1,
                        max: 100
                    },
                    ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form> */}