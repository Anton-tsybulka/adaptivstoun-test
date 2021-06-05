import { Button } from 'antd'
import { Link } from 'react-router-dom'

const ItemPost = ({data, id}) => {
    const item = data &&
    data.length !== 0 &&
    data.find(({key}) => key === id)
    console.log('Itempost: ', item);

    return (
        <>
            <h2 style={{textAlign: 'center'}}>
                {item.post}
            </h2>
            <p 
                style={{
                    textIndent: '50px',
                    paddingLeft: '50px'}}>
                {item.content}
            </p>
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

export default ItemPost