import { UseUser } from '../../../hooks';
import { UserTemplate } from '../../../templates';

export const Users = () => {
  const { usersData, isLoadingData } = UseUser('users');

  return <UserTemplate dataList={usersData} isLoadingData={isLoadingData} />;
};
