import { NavDropdown } from 'react-bootstrap';
import { NavbarLink, SimpleForm } from '../../../ui';
import { NavbarNavProps } from '../../../interfaces';
import './NavbarNav.scss';
import { useState } from 'react';

export const NavbarNav = ({ navbarItems }: NavbarNavProps) => {
	const [closeDropdown, setCloseDropdown] = useState<boolean>(false);
	
	return (
		<div className='me-auto navbar-nav'>
			{navbarItems.map(({ label, redirectTo, dropdownForm }) =>
				dropdownForm ? (
					<NavDropdown
						key={label}
						id={label}
						className={`${closeDropdown ? 'dropdown-close' : 'show'}`}
						title={label}
						onClickCapture={( () => setCloseDropdown(false))}
					>
						<SimpleForm {...dropdownForm} onCloseForm={() => setCloseDropdown(true)} />
					</NavDropdown>
				) : (
					<NavbarLink key={label} label={label} redirectTo={redirectTo} />
				)
			)}
		</div>
	);
};
