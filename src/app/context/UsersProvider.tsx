import { useReducer, JSX } from 'react';
import { UserContext } from './UsersContext';
import { UsersState } from '../interfaces';
import { usersReducer } from './usersReducer';

const INITIAL_STATE: UsersState = {
  numberAlbums: 5,
  numberPosts: 5
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

  return (
    <UserContext.Provider value={{usersState, setNumberPosts, setNumberAlbums}}>
      {children}
    </UserContext.Provider>
  );
};
