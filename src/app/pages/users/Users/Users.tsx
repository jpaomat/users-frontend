import { useUser } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';

export const Users = () => {
  const usersClient = envJson.usersClient;
  const { usersData, isLoadingData } = useUser(usersClient.users);

  return <UserTemplate dataList={usersData} isLoadingData={isLoadingData} />;
};
