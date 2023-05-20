import { ButtonApp } from '../../atoms';
import PropTypes from 'prop-types';
import { INavbarAuth } from '../../interfaces';

export const NavbarAuth = ({ userName }: INavbarAuth) => {
	return (
		<ul className='navbar-nav ml-auto'>
			<span className='nav-item nav-link text-primary'>{userName}</span>
			<ButtonApp
				size='sm'
				variant='outline-light'
				onClick={() => console.log('Logout')}
			>
				<span>Logout</span>
			</ButtonApp>
		</ul>
	);
};

NavbarAuth.defaultProps = {
	userName: '',
};

NavbarAuth.propTypes = {
	userName: PropTypes.string.isRequired,
};
