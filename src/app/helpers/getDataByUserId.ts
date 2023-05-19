import { usersApi } from '../../api/usersRequest';

export const getDataByUser = async (id: string, resource: string) => {
    try {
        const { data } = await usersApi.get(`${resource}?userId=${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};