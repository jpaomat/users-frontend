import { NavLink } from 'react-router-dom';
import { NavbarLinkProps } from '../../../interfaces';

export const NavbarLink = ({className, label, redirectTo }: NavbarLinkProps) => {
  
	return (
		<NavLink
			className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${className}`}
			to={redirectTo}
		>
			{label}
		</NavLink>
	);
};
