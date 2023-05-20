import { useEffect, useState } from 'react';
import { ICardItem } from '../ui/interfaces';
import { useAxios } from './useAxios';
import { getDataByUser, sortDataById } from '../helpers';
import envJson from '../../app/config/ENV.json';

const usersClient = envJson.usersClient;

export const usePosts = (resource: string, numLastPosts: number) => {

    const { data: initialPostData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompletePosts, setDataCompletePosts] = useState<ICardItem[]>([{
        description: '',
        aditionalInfo: [''],
        footerText: '',
    }]);

    const getLastPosts = (posts: any) => {
        const sortPosts = sortDataById(posts);
        return sortPosts.slice(0, numLastPosts);
    };

    const addNumCommentsInUsers = (posts: any) => {
        return {
            description: posts.title,
            footerText: `Autor: ${posts.userName}`,
            aditionalInfo: [`${posts.numComments} comentarios`],
        };
    };

    const addCommentsToPosts = async () => {
        if (!hasError && initialPostData.length > 0) {
            const lastPosts = getLastPosts(initialPostData);
            const userComplete = await Promise.all(
                lastPosts.map(async (post: any) => {
                    const commentsByUser = await getDataByUser({ id: post.id, path: usersClient.comments });
                    const userByUserId = await getDataByUser({ id: post.id, path: `${usersClient.users}/${post.userId}` });
                    return addNumCommentsInUsers({
                        ...post,
                        numComments: commentsByUser.length,
                        userName: userByUserId.name
                    });
                })
            );
            setDataCompletePosts(userComplete);
        }
    };

    useEffect(() => {
        addCommentsToPosts();
        setIsLoadingData(true);
    }, [initialPostData]);

    return {
        postsData: dataCompletePosts,
        isLoadingData
    };
};
