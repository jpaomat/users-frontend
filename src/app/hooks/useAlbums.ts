import { getDataByUser, sortDataById } from '../helpers';
import { useEffect, useState } from 'react';
import { useAxios } from './useAxios';
import { ICardItem } from '../ui/interfaces';
import envJson from '../../app/config/ENV.json';

const usersClient = envJson.usersClient;

export const useAlbums = (resource: string, numLastAlmbums: number ) => {

    const { data: initialAlbumData, hasError } = useAxios(resource);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteAlbums, setDataCompleteAlbums] = useState<ICardItem[]>([{
        description: '',
        aditionalInfo: [''],
        footerText: '',
    }]);

    const getLastAlbums = (posts: any) => {
        const sortPosts = sortDataById(posts);
        return sortPosts.slice(0, numLastAlmbums);
    };

    const addNumCommentsInUsers = (data: any) => {
        return {
            description: data.title,
            footerText: `Autor: ${data.userName}`,
            aditionalInfo: [`${data.numPhotos} fotos`],
        };
    };

    const addPhotosToAlbums = async () => {
        if (!hasError && initialAlbumData.length > 0) {
            const lastAlbums = getLastAlbums(initialAlbumData);
            const userComplete = await Promise.all(
                lastAlbums.map(async (album: any) => {
                    const photosByAlbum = await getDataByUser({ id: album.id, path: usersClient.photos });
                    const userByUserId = await getDataByUser({ id: album.id, path: `${usersClient.users}/${album.userId}` });
                    return addNumCommentsInUsers({
                        ...album,
                        numPhotos: photosByAlbum.length,
                        userName: userByUserId.name
                    });
                })
            );
            setDataCompleteAlbums(userComplete);
        }
    };

    useEffect(() => {
        addPhotosToAlbums();
        setIsLoadingData(true);
    }, [initialAlbumData]);

  return {
    albumsData: dataCompleteAlbums,
    isLoadingData
  };
};
