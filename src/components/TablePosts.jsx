import PropTypes from 'prop-types'
import { Table} from 'antd'
import { Link, useRouteMatch } from 'react-router-dom';

const TablePosts = ({data}) => {
  let {url} = useRouteMatch()
  
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
          dataIndex: 'partContent',
          key: 'partContent',
          width: '800px'
        },
    ]     
      
  return <Table columns={columns} dataSource={data} />
}

TablePosts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TablePosts