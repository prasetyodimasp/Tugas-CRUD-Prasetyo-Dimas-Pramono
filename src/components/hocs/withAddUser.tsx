import { ComponentProps, ComponentType } from 'react'
import UserDetailPage from '../../pages/user-detail-page';

type UserDetailPageProps = ComponentProps<typeof UserDetailPage>

const withAddUser = (WrappedComponent: ComponentType<UserDetailPageProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const onSubmit = () => {}
    return <WrappedComponent {...props} onSubmit={onSubmit} />
  };

  return NewComponent;
};

export default withAddUser;
