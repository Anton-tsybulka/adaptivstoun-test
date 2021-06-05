import React, { useReducer, memo } from 'react'
import { Link, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import {
  TablePosts,
  CreatePost,
  ItemPost
} from './components'
import { Row, Col, Button } from 'antd'

const initialState = [
  {
    key: '1',
    post: 'John Brown',
    age: 32,
    content: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    post: 'Jim Green',
    age: 42,
    content: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    post: 'Joe Black',
    age: 32,
    content: 'Sidney No. 1 Lake Park'
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
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
      <Row justify='center'>
        <Route
          path='/'
          component={() => <TablePosts data={state} />}
          exact />
      </Row>
      <Route
        path='/:id'
        render={({ match }) => {
          console.log('Route: ', match);
          const { id } = match.params;
          return <ItemPost data={state} id={id} />
        }} />
      <Route
        path='/create'
        component={() => <CreatePost />} />
    </>
  )
})

export default App
