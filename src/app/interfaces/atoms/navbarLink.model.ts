import { FormDropdownProps } from '../molecules';

export interface NavbarLinkProps {
    className?: string;
    label: string;
    redirectTo: string;
    dropdownForm?: FormDropdownProps; 
}
