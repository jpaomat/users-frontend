import { useAxios } from './useAxios';
import { getDataByUser } from '../helpers/getDataByUserId';
import { ICardItem } from '../ui/interfaces';
import { useEffect, useState } from 'react';

export const UseUser = ((resource: string) => {

    const { data: initialUsersData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteUsers, setDataCompleteUsers] = useState<ICardItem[]>([{
        description: '',
        aditionalInfo: [],
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

    const getData = async () => {
        if (!hasError && initialUsersData.length > 0) {
            const userComplete = await Promise.all(
                initialUsersData.map(async user => {
                    const postsByUser = await getDataByUser(user.id, 'posts');
                    const albumsByUser = await getDataByUser(user.id, 'albums');
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
        getData();
        setIsLoadingData(true);
    }, [initialUsersData]);

    return {
        usersData: dataCompleteUsers,
        isLoadingData
    };
});
