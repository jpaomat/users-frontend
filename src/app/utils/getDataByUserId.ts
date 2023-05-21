import { usersApi } from '../../api/usersRequest';
import { IDataByUser } from './helper.model';

export const getDataByUser = async({id, path}: IDataByUser) => {
    try {
        const { data } = await usersApi.get(`${path}?userId=${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};