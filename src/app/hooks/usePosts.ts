import { useEffect, useState } from 'react';
import { getDataByUser, getLastElementsArray } from '../helpers';
import { ICardItem } from '../ui/interfaces';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';

export const usePosts = (resource: string, numLastPosts: number) => {
    const usersClient = envJson.usersClient;
    const { data: initialPostsData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompletePosts, setDataCompletePosts] = useState<ICardItem[]>([initialDataCardItem]);

    const addCommentsToPosts = async () => {
        if (!hasError && initialPostsData.length > 0) {
            const lastPosts = getLastElementsArray(initialPostsData, numLastPosts);
            const userComplete = await Promise.all(
                lastPosts.map(async ({ id, title, userId }) => {
                    const commentsByUser = await getDataByUser({ id, path: usersClient.comments });
                    const userByUserId = await getDataByUser({ id, path: `${usersClient.users}/${userId}` });
                    return {
                        title,
                        footerText: `Autor: ${userByUserId.name}`,
                        aditionalInfo: [`${commentsByUser.length} comentarios`],
                    };
                })
            );
            setDataCompletePosts(userComplete);
        }
    };

    useEffect(() => {
        addCommentsToPosts();
        setIsLoadingData(true);
    }, [initialPostsData]);

    return {
        postsData: dataCompletePosts,
        isLoadingData
    };
};
