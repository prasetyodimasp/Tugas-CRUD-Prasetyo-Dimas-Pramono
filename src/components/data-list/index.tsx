import { Table } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetUsers } from "../../services/api/get-users";
import { colums } from "./constants";

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
};

export default DataList;
