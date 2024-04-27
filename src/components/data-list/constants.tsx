import { TableProps } from "antd";
import DeleteUser from "../delete-user";
import EditUser from "../edit-user";

export interface UserDataType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const colums: TableProps<UserDataType>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Username", dataIndex: "username", key: "username" },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Action",
    key: "action",
    render: (velue: UserDataType) => {
      console.log(velue);
      return (
        <div>
          <EditUser {...velue} />
          <DeleteUser id={velue.id} />
        </div>
      );
    },
  },
];
