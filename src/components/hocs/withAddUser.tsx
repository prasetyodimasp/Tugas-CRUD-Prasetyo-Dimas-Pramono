import { ComponentProps, ComponentType } from 'react'
import UserDetailPage from '../../pages/user-detail-page';

type UserDetailPageProps = ComponentProps<typeof UserDetailPage>

const withAddUser = (WrappedComponent: ComponentType<UserDetailPageProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    return<WrappedComponent {...props} />
  };

  return NewComponent;
};

export default withAddUser;
