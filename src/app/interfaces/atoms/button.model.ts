import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonAppProps {
    children: ReactNode;
    type: 'button' | 'reset' | 'submit';
    size: 'sm' | 'lg';
    variant: 'primary'|'secondary'|'success'|'light'|'dark'|'outline-light'|'outline-dark';
    isDisabled: boolean;
    onClick?: MouseEventHandler;
}