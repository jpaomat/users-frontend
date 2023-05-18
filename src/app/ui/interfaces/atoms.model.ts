import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonApp {
    children: ReactNode; 
    size: string;
    variant: string;
    isDisabled: boolean; 
    onClick: MouseEventHandler;
}

export interface INavbarLink {
    text: string;
    path: string;
}