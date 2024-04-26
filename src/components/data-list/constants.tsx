import { TableProps } from "antd";
import EditUser from "../edit-user";
import DeleteUser from "../delete-user";

interface userDataType {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const colums: TableProps<userDataType>["columns"] = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
        title: "Action",
        key: "action",
        render: (velue:userDataType) => {
            console.log(velue)
            return (
                <div>
                    <EditUser />
                    <DeleteUser id={velue.id} />
                </div>
            )
        }
    },
];