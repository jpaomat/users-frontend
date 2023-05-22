interface IDataSortById {
    id: string;
}
export const sortDataById = (data: IDataSortById[]) => {
    return data.sort((a: IDataSortById, b: IDataSortById) => (a.id < b.id) ? 1 : -1);
};