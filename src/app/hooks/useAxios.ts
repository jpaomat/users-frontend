import { useState, useEffect } from 'react';
import { IuseAxios } from './hooks.model';
import { usersApi } from '../../api/usersRequest';

export const useAxios = (url: string) => {
    const [data, setData] = useState<IuseAxios>({
        data: [],
        isLoading: true,
        hasError: null
    });

    const getAxios = async () => {
        setData({
            ...data,
            isLoading: true,
        });
        try {
            const { data } = await usersApi.get(url);
            setData({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setData({
                ...data,
                hasError: error as Error
            });
        }
    };

    useEffect(() => {
        getAxios();
    }, [url]);

    return {
        ...data,
        getAxios
    };
};
