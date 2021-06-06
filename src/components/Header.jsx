import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

const Header = () => {
    console.log('header');
    return (
        <Row
            justify='space-around'
            style={{ marginTop: '50px' }}>
            <Col>
            <h1>Блог</h1>
            </Col>
            <Col>
            <Button type='primary'>
                <Link to='/create'>
                Создать пост
                </Link>
            </Button>
            </Col>
        </Row>
    )
}

export default Header