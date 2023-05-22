import { NavbarAuth, NavbarNav } from '../../molecules';
import { NavbarProps } from '../../../interfaces';
import { Container, Navbar } from 'react-bootstrap';

export const NavbarApp = ({ type, size, navbarLinks }: NavbarProps) => {
	return (
		<Navbar className='fixed-top' collapseOnSelect expand='lg' bg={type} variant={type}>
			<Container>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<NavbarNav navbarItems={navbarLinks} />
				</Navbar.Collapse>
				<div>
					<NavbarAuth userName='UserName' />
				</div>
			</Container>
	  </Navbar>
	);
};

NavbarApp.defaultProps = {
	type: '',
	size: '',
};
