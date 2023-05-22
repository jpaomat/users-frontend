import { useReducer, JSX } from 'react';
import { UserContext } from './UsersContext';
import { UsersState } from '../interfaces';
import { usersReducer } from './usersReducer';

const INITIAL_STATE: UsersState = {
  numberAlbums: 5,
  numberPosts: 5,
  userSelected: '',
};

interface UserProviderProps {
	children: JSX.Element | JSX.Element[];
}

export const UsersProvider = ({children}: UserProviderProps) => {
  const [usersState, dispatch] = useReducer( usersReducer,INITIAL_STATE);

  const setNumberPosts = (numPosts: number) => {
    dispatch({type: 'addNumberPosts', payload: numPosts});
  };

  const setNumberAlbums = (numAlbums: number) => {
    dispatch({type: 'addNumberAlbums', payload: numAlbums});
  };

  const setUserSelected = (user: string) => {
    dispatch({type: 'addUserSelected', payload: user});
  };

  return (
    <UserContext.Provider value={{usersState, setNumberPosts, setNumberAlbums, setUserSelected}}>
      {children}
    </UserContext.Provider>
  );
};
