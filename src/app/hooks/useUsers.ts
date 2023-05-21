import { useEffect, useState } from 'react';
import { CardItemProps } from '../interfaces';
import { getDataByUser } from '../utils';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';

export const useUsers = (resource: string) => {
    const usersClient = envJson.usersClient;
    const { data: initialUsersData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteUsers, setDataCompleteUsers] = useState<CardItemProps[]>([initialDataCardItem]);

    const addPostsToUsers = async () => {
        if (!hasError && initialUsersData.length > 0) {
            const userComplete = await Promise.all(
                initialUsersData.map(async ({id, name, email, username}) => {
                    const postsByUser = await getDataByUser({ id, path: usersClient.post });
                    const albumsByUser = await getDataByUser({ id, path: usersClient.albums });
                    return {
                        userIconProps: { icon: 'user', userName: username },
                        description: name,
                        footerText: email,
                        aditionalInfo: [`${postsByUser.length} publicaciones`, `${albumsByUser.length} álbumes`],
                    };
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
};
