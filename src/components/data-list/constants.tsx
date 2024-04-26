import { TableProps } from "antd";
import EditUser from "../edit-user";
import DeleteUser from "../delete-user";

interface DataType {
    name: string;
    username: string;
    email: string;
}

export const colums: TableProps<DataType>["columns"] = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
        title: "Action",
        key: "action",
        render: () => {
            return (
                <div>
                    <EditUser />
                    <DeleteUser />
                </div>
            )
        }
    },
];