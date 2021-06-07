import { Controller, useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Button, Input, Form, Row } from 'antd'
import { Link } from 'react-router-dom'

const CreatePost = ({ dispatch }) => {
    const { control, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = data => dispatch({type: 'addPost', payload: data})
    
    return (
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <Row justify='center'>
                    <Controller
                        control={control}
                        name='post'
                        defaultValue=''
                        rules={{ 
                            required: true,
                            maxLength: 10,
                            pattern: /^[A-Za-zА-Яа-я\s]+$/i
                        }}
                        render={({ field }) => (
                        <Form.Item
                            label='Title'
                            style={{paddingLeft: '20px'}} >
                            <Input {...field}
                                style={{width: '700px'}} />
                            {errors?.post?.type === 'required' && <p>This field is required</p>}
                            {errors?.post?.type === 'maxLength' && (
                                <p>Title cannot exceed 10 characters</p>)}
                            {errors?.post?.type === 'pattern' && (
                                <p>Alphabetical characters only</p>)}
                        </Form.Item>)} />
                </Row>
                <Row justify='center'>
                    <Controller
                        control={control}
                        name='content'
                        defaultValue=''
                        rules={{ 
                            required: true,
                            maxLength: 100
                        }}
                        render={({ field}) => (
                        <Form.Item
                            label='Content'>
                            <Input.TextArea 
                                {...field}
                                style={{width: '700px'}} />
                            {errors.content?.type === 'required' && <p>This field is required</p>}
                            {errors?.content?.type === 'maxLength' && (
                                <p>Content cannot exceed 100 characters</p>)} 
                        </Form.Item>)} />
                </Row>
                <Row 
                    justify='center'
                    style={{marginTop: '30px'}}>
                    <Button 
                        style={{marginRight: '30px'}}
                        type='primary' 
                        htmlType='submit'>
                            Готово
                    </Button>
                    <Button 
                        type='primary'>
                        <Link to='/'>
                            Назад
                        </Link>
                    </Button>
                </Row>                              
            </form>
    )
}

CreatePost.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default CreatePost