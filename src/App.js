import React, { useReducer } from 'react'
import { Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import {
  TablePosts,
  CreatePost,
  ItemPost,
  Header
} from './components'
import { Row } from 'antd'

let keyItem = 100

const initialState = [
  {
    key: ++keyItem,
    post: 'Brown',
    content: 'New York. If your form will invoke reset with default values, you will need to call useForm with defaultValues instead of setting the defaultValue on individual fields.',
    partContent: 'New York. If your fo...'
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'addPost':
      let item = action.payload.content.slice(0, 20)
        .trim()
        .split(' ')
      item.push('...')

      return [
        ...state,
        {
          ...action.payload,
          key: ++keyItem,
          partContent: item.join(' ')
        }
      ]
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const tablePosts = () => <TablePosts data={state} />
  const itemPost = () => <ItemPost data={state} />
  const createPost = () => <CreatePost dispatch={dispatch} />

  return (
    <>
      <Header />
      <Row justify='center'>
        <Route
          path='/'
          component={tablePosts}
          exact />
      </Row>
      <Route
        path='/post/:id'
        component={itemPost} />
      <Route
        path='/create'
        component={createPost} />
    </>
  )
}

export default App
