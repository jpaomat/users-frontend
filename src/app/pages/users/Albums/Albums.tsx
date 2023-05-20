import { useAlbums } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';

export const Albums = () => {
  const usersClient = envJson.usersClient;
  const { albumsData, isLoadingData } = useAlbums(usersClient.albums, 5);

	return <UserTemplate dataList={albumsData} isLoadingData={isLoadingData} />;
};
