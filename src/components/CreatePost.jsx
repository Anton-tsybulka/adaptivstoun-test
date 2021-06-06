import { Button } from 'antd'
import { Link } from 'react-router-dom'

const CreatePost = () => {
    console.log('Createpost : ');
    return (
        <>
            <p>CreatePost</p>
            <Button 
                type='primary'
                style={{
                    marginLeft: '100px',
                    marginTop: '50px'}}>
                <Link to='/'>
                    Назад
                </Link>
            </Button>
        </>
        
    )
}

export default CreatePost