import { Table} from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

const TablePosts = ({data}) => {
  let {url} = useRouteMatch();
  console.log('Tablepost: ', data);
    const columns = [
        {
          title: 'Post',
          dataIndex: 'post',
          key: 'post',
          width: '200px',
          render: (text, record) => <Link to={`${url}post/${record.key}`}>{text}</Link>
        },
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
          width: '800px'
        },
    ]     
      
    return <Table columns={columns} dataSource={data} />
}

export default TablePosts