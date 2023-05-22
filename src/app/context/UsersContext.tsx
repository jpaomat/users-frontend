import { createContext } from 'react';
import { UsersState } from '../interfaces';

export type UserContextProps = {
    usersState: UsersState;
    setNumberPosts: ( numPosts: number ) => void;
    setNumberAlbums: ( numAlbums: number ) => void;
    setUserSelected: ( user: string ) => void;
} 

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
