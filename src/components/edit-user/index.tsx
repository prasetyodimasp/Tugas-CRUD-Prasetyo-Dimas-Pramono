import { Button } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataType } from "../data-list/constants";

const EditUser: FC<UserDataType> = (props) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(`/${props.id}`, { state: props })}
      style={{ marginRight: "4px" }}
    >
      Edit
    </Button>
  );
};

export default EditUser;
