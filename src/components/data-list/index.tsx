import { Table } from 'antd';
import React, { FC } from 'react'; 1
import { colums } from './constants';
import { useQuery } from '@tanstack/react-query';
import { useGetUsers } from '../../services/api/get-users';

const DataList: FC = () => {
  const { data: userList } = useGetUsers();

  return (
    <Table
      columns={colums}
      dataSource={userList?.map(({ id, username, name, email }) => ({
        key: id,
        username,
        name,
        email,
      }))} />
  );
}

export default DataList
