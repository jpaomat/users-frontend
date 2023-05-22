import { useEffect, useState } from 'react';
import { CardItemProps } from '../interfaces';
import { getDataByUser, getLastElementsArray } from '../utils';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';
import { useLocation } from 'react-router-dom';

export const usePosts = (resource: string, numLastPosts: number) => {
    const usersClient = envJson.usersClient;
    const queryString = useLocation().search;
        const { data: initialPostsData, hasError } = useAxios(`${resource}${queryString}`);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompletePosts, setDataCompletePosts] = useState<CardItemProps[]>([initialDataCardItem]);

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
                        aditionalInfo: [{text: `${commentsByUser.length} comentarios`}],
                    };
                })
            );
            setDataCompletePosts(userComplete);
        }
    };

    useEffect(() => {
        addCommentsToPosts();
        setIsLoadingData(true);
    }, [initialPostsData, numLastPosts]);

    return {
        postsData: dataCompletePosts,
        isLoadingData
    };
};
