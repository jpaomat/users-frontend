import { NavbarLinkProps } from '../atoms';

export interface NavbarProps {
    type: 'dark'|'primary'|'light';
    size: 'sm'|'bg'|'lg';
    navbarLinks: Array<NavbarLinkProps>
}