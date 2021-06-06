import React, { useReducer, memo } from 'react'
import { Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import {
  TablePosts,
  CreatePost,
  ItemPost,
  Header
} from './components'
import { Row } from 'antd'

const initialState = [
  {
    key: '1',
    post: 'John Brown',
    content: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    post: 'Jim Green',
    content: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    post: 'Joe Black',
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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <Row justify='center'>
        <Route
          path='/'
          component={() => <TablePosts data={state} />}
          exact />
      </Row>
      <Route
        path='/post/:id'
        component={() => <ItemPost data={state} />} />
      <Route
        path='/create'
        component={() => <CreatePost />} />
    </>
  )
}

export default App
