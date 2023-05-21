import { NavLink } from 'react-router-dom';
import { NavbarLinkProps } from '../../../interfaces';

export const NavbarLink = ({ label, redirectTo }: NavbarLinkProps) => {
  
	return (
		<NavLink
			className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
			to={redirectTo}
		>
			{label}
		</NavLink>
	);
};
