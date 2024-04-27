import { ComponentProps, ComponentType } from "react";
import { useLocation } from "react-router-dom";
import UserDetailPage from "../../pages/user-detail-page";
import { useEditUser } from "../../services/api/edit-user";
import { useUserStore } from "../../services/stores/user";
import { UserDataType } from "../data-list/constants";

type UserDetailPageProps = ComponentProps<typeof UserDetailPage>;

const withEditUser = (WrappedComponent: ComponentType<UserDetailPageProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const location = useLocation();
    const state = location.state as UserDataType;
    const { mutate } = useEditUser();
    const { setUsers, users } = useUserStore();

    const onSubmit = (values: any) => {
      mutate(
        { ...values, id: state.id },
        {
          onSuccess: (response) => {
            setUsers([...users, ...response]);
          },
        }
      );
    };
    return (
      <WrappedComponent {...props} initialValues={state} onSubmit={onSubmit} />
    );
  };
  return NewComponent;
};

export default withEditUser;
