import { useContext } from 'react';
import { usePosts } from '../../../hooks';
import { UserTemplate } from '../../../templates';
import envJson from '../../../config/ENV.json';
import { UserContext } from '../../../context';

export const Posts = () => {
	const usersClient = envJson.usersClient;
	const { usersState } = useContext(UserContext);
	const { postsData, isLoadingData } = usePosts(usersClient.post, usersState.numberPosts);

	return <UserTemplate dataCardList={postsData} isLoadingData={isLoadingData} />;
};
