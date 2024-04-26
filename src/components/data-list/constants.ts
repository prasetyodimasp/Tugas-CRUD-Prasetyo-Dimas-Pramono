import { TableProps } from "antd";

interface DataType {
    name: string;
    username: string;
    email: string;
}

export const colums: TableProps<DataType>["columns"] = [
    {title: "name", dataIndex: "name", key: "name"},
    {title: "username", dataIndex: "username", key: "username"},
    {title: "email", dataIndex: "email", key: "email"},
];