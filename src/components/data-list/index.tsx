import { Table } from 'antd';
import { FC } from 'react'; 1
import { colums } from './constants';
import { useQuery } from '@tanstack/react-query';
import { useGetUsers } from '../../services/api/get-users';
import { useUserStore } from '../../services/stores/user';

const DataList: FC = () => {
  const { userList } = useGetUsers();

  return (
    <Table
      columns={colums}
      dataSource={userList?.map(({ id, username, name, email }) => ({
        key: id,
        id,
        username,
        name,
        email,
      }))} />
  );
}

export default DataList
