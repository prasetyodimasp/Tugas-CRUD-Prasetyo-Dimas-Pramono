import { Table } from 'antd';
import { FC } from 'react'; 1
import { colums } from './constants';
import { useGetUsers } from '../../services/api/get-users';
import { Link } from 'react-router-dom';

const DataList: FC = () => {
  const { userList } = useGetUsers();

  return (
    <>
      <Table
        columns={colums}
        dataSource={userList?.map(({ id, username, name, email }) => ({
          key: id,
          id,
          username,
          name,
          email,
        }))} 
      />
      <Link to="/add">Add User</Link>
    </>
  );
}

export default DataList
