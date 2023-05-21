import { usePosts } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';

export const Posts = () => {
  const usersClient = envJson.usersClient;
	const { postsData, isLoadingData } = usePosts(usersClient.post, 5);

	return <UserTemplate dataCardList={postsData} isLoadingData={isLoadingData} />;
};
