export const sortDataById = (data: any) => data.sort((a: any, b: any) => (a.id < b.id) ? 1 : -1);