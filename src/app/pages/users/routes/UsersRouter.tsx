import { useContext } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Albums, Posts, Users } from '../';
import { NavbarApp } from '../../../ui/organisms';
import { navbarLinks } from '../../../helpers';
import { UserContext } from '../../../context';

export const UsersRouter = () => {
	const navigate = useNavigate();
	const { setNumberAlbums, setNumberPosts } = useContext(UserContext);
	const itemsNavbar = navbarLinks({ setNumberAlbums, setNumberPosts, navigate });

	return (
		<>
			<NavbarApp size='bg' type='dark' navbarLinks={itemsNavbar} />
			<Routes>
				<Route path='/users' element={<Users />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/albums' element={<Albums />} />
				<Route path='/' element={<Navigate to={'users'} />} />
			</Routes>
		</>
	);
};
