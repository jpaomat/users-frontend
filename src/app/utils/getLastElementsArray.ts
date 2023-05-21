import { sortDataById } from './sortDataById';

export const getLastElementsArray = (dataList: any, numElements: number) : any[] => {
    const sortPosts = sortDataById(dataList);
    return sortPosts.slice(0, numElements);
};
