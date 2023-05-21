import { NavbarLink } from '../../../ui';
import { NavbarLinkProps, NavbarNavProps } from '../../../interfaces';

export const NavbarNav = ({ navbarItems }: NavbarNavProps) => {
	
	return (
		<div className='collapse navbar-collapse' id='navbarNav'>
			<ul className='navbar-nav'>
				{navbarItems.map((item: NavbarLinkProps, id: number) => (
					<NavbarLink key={id} {...item} />
				))}
			</ul>
		</div>
	);
};
