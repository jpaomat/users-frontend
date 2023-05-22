import { UsersState } from '../interfaces';

type UsersAction =
    | { type: 'addNumberPosts', payload: number }
    | { type: 'addNumberAlbums', payload: number }
    | { type: 'addUserSelected', payload: string };

export const usersReducer = (state: UsersState, action: UsersAction): UsersState => {
    switch (action.type) {
        case 'addNumberPosts':
            return {
                ...state,
                numberPosts: action.payload
            };
        case 'addNumberAlbums':
            return {
                ...state,
                numberAlbums: action.payload
            };
        case 'addUserSelected':
            return {
                ...state,
                userSelected: action.payload
            };
        default:
            return state;
    }
};
