import PropTypes from 'prop-types';
import { NavbarAuth, NavbarNav } from '../../molecules';
import { NavbarProps } from '../../../interfaces';

export const Navbar = ({ type, size, navbarLinks }: NavbarProps) => {
	return (
		<nav className={`navbar fixed-top navbar-expand-sm navbar-${type} ${size}-${type} p-2`}>
			<div className='container-fluid'>
				<NavbarNav navbarItems={navbarLinks} />
			</div>
			<div className='collapse navbar-collapse w-100 dual-collapse2 d-flex justify-content-end'>
				<NavbarAuth userName='UserName' />
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
