import { useEffect, useState } from 'react';
import { CardItemProps } from '../interfaces';
import { getDataByUser, getLastElementsArray } from '../utils';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';
import { useLocation } from 'react-router-dom';

export const useAlbums = (resource: string, numLastAlmbums: number ) => {
    const usersClient = envJson.usersClient;
    const queryString = useLocation().search;
    const { data: initialAlbumData, hasError } = useAxios(`${resource}${queryString}`);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [dataCompleteAlbums, setDataCompleteAlbums] = useState<CardItemProps[]>([initialDataCardItem]);

    const addPhotosToAlbums = async () => {
        if (!hasError && initialAlbumData.length > 0) {
            const lastAlbums = getLastElementsArray(initialAlbumData, numLastAlmbums);
            const userComplete = await Promise.all(
                lastAlbums.map(async ({ id, title, userId }) => {
                    const photosByAlbum = await getDataByUser({ id, path: usersClient.photos });
                    const userByUserId = await getDataByUser({ id, path: `${usersClient.users}/${userId}` });
                    return {
                        title,
                        footerText: `Autor: ${userByUserId.name}`,
                        aditionalInfo: [{text: `${photosByAlbum.length} fotos`}],
                    };
                })
            );
            setDataCompleteAlbums(userComplete);
        }
    };

    useEffect(() => {
        addPhotosToAlbums();
        setIsLoadingData(true);
    }, [initialAlbumData, numLastAlmbums]);

  return {
    albumsData: dataCompleteAlbums,
    isLoadingData
  };
};
