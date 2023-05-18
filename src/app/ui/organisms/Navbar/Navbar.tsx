import PropTypes from 'prop-types';
import { INavbar } from '../../interfaces/organisms.model';
import { NavbarAuth, NavbarNav, navbarLinks } from '../../molecules';

export const Navbar = ({ type, size }: INavbar) => {
	return (
		<nav
			className={`navbar navbar-expand-sm navbar-${type} ${size}-${type} p-2`}
		>
			<div className='container-fluid'>
				<NavbarNav navbarItems={navbarLinks} />
			</div>
			<div className='collapse navbar-collapse w-100 dual-collapse2 d-flex justify-content-end'>
				<NavbarAuth userName='Paola' />
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	type: '',
	size: '',
};

Navbar.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
};
