import { useUsers } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';

export const Users = () => {
  const usersClient = envJson.usersClient;
  const { usersData, isLoadingData } = useUsers(usersClient.users);

  return <UserTemplate dataCardList={usersData} isLoadingData={isLoadingData} />;
};
