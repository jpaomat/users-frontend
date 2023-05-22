import { useEffect, useState, useContext } from 'react';
import { CardItemProps } from '../interfaces';
import { getDataByUser } from '../utils';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context';

export const useUsers = (resource: string) => {
    const usersClient = envJson.usersClient;
    const navigate = useNavigate();
    const { data: initialUsersData, hasError } = useAxios(resource);
    const { setUserSelected, setNumberAlbums, setNumberPosts } = useContext(UserContext);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteUsers, setDataCompleteUsers] = useState<CardItemProps[]>([initialDataCardItem]);

    const navigateTo = (userId: string, path: string, numItems: number) => {
        setUserSelected(userId);
        setNumberAlbums(numItems);
        setNumberPosts(numItems);
        navigate(`/${path}?userId=${userId}`);
    };

    const addPostsToUsers = async () => {
        if (!hasError && initialUsersData.length > 0) {
            const userComplete = await Promise.all(
                initialUsersData.map(async ({ id, name, email, username }) => {
                    const postsByUser = await getDataByUser({ id, path: usersClient.post });
                    const albumsByUser = await getDataByUser({ id, path: usersClient.albums });
                    return {
                        userIconProps: { icon: 'user', userName: username },
                        description: name,
                        footerText: email,
                        aditionalInfo: [{
                            text: `${postsByUser.length} publicaciones`,
                            redirectTo: () => navigateTo(id, usersClient.post, postsByUser.length)
                        },
                        {
                            text: `${albumsByUser.length} álbumes`,
                            redirectTo: () => navigateTo(id, usersClient.albums, albumsByUser.length)
                        }],
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
