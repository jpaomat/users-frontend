import PropTypes from 'prop-types';
import { NavbarLink } from '../../atoms';
import { INavbarLink, INavbarNav } from '../../interfaces';

export const NavbarNav = ({ navbarItems }: INavbarNav) => {

	return (
		<div className='collapse navbar-collapse' id='navbarNav'>
			<ul className='navbar-nav'>
				{navbarItems.map((item: INavbarLink, id: number) => (
					<NavbarLink key={id} {...item} />
				))}
			</ul>
		</div>
	);
};

NavbarNav.defaultProps = {
	navbarItems: [{}],
};

NavbarNav.propTypes = {
	navbarItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
