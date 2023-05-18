import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { INavbarLink } from '../../interfaces';

export const NavbarLink = ({ text, path }: INavbarLink) => {
  
	return (
		<NavLink
			className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
			to={path}
		>
			{text}
		</NavLink>
	);
};

NavbarLink.defaultProps = {
	text: '',
	path: '',
};

NavbarLink.propTypes = {
	text: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
