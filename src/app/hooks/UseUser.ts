import { useAxios } from './useAxios';
import { getDataByUser } from '../helpers';
import { ICardItem } from '../ui/interfaces';
import { useEffect, useState } from 'react';
import envJson from '../../app/config/ENV.json';

const usersClient = envJson.usersClient;

export const useUser = ((resource: string) => {

    const { data: initialUsersData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteUsers, setDataCompleteUsers] = useState<ICardItem[]>([{
        description: '',
        aditionalInfo: [''],
        footerText: '',
    }]);

    const addNumPostInUsers = (user: any) => {
        return {
            userIcon: { icon: '', userName: user.username },
            description: user.name,
            footerText: user.email,
            aditionalInfo: [`${user.numPosts} publicaciones`, `${user.numPosts} álbumes`],
        };
    };

    const addPostsToUsers = async () => {
        if (!hasError && initialUsersData.length > 0) {
            const userComplete = await Promise.all(
                initialUsersData.map(async user => {
                    const postsByUser = await getDataByUser({ id: user.id, path: usersClient.post });
                    const albumsByUser = await getDataByUser({ id: user.id, path: usersClient.albums });
                    return addNumPostInUsers({
                        ...user,
                        numPosts: postsByUser.length,
                        numAlbums: albumsByUser.length,
                    });
                })
            );
            setDataCompleteUsers(userComplete);
        }
    };

    useEffect(() => {
        addPostsToUsers();
        setIsLoadingData(true);
    }, [initialUsersData]);

    return {
        usersData: dataCompleteUsers,
        isLoadingData
    };
});
