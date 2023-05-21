import { useEffect, useState } from 'react';
import { CardItemProps } from '../interfaces';
import { getDataByUser, getLastElementsArray } from '../helpers';
import { useAxios, initialDataCardItem } from './';
import envJson from '../config/ENV.json';

export const useAlbums = (resource: string, numLastAlmbums: number ) => {
    const usersClient = envJson.usersClient;
    const { data: initialAlbumData, hasError } = useAxios(resource);
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
                        aditionalInfo: [`${photosByAlbum.length} fotos`],
                    };
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
