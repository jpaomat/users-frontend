import { useContext } from 'react';
import { useAlbums } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';
import { UserContext } from '../../../context';

export const Albums = () => {
  const usersClient = envJson.usersClient;
  const { usersState } = useContext(UserContext);
  const { albumsData, isLoadingData } = useAlbums(usersClient.albums, usersState.numberAlbums);

	return <UserTemplate dataCardList={albumsData} isLoadingData={isLoadingData} />;
};
