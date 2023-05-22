import PropTypes from 'prop-types';
import { ButtonApp } from '../../atoms';
import { NavbarAuthProps } from '../../../interfaces';

export const NavbarAuth = ({ userName }: NavbarAuthProps) => {
	return (
		<ul className='navbar-nav ml-auto'>
			<span className='nav-item nav-link text-primary'>{userName}</span>
			<ButtonApp
				size='sm'
				variant='outline-light'
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
