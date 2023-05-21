import { NavbarLinkProps } from '../interfaces';

export const navbarLinks = ({ setNumberPosts, setNumberAlbums, navigate }: any): NavbarLinkProps[] => [
    {
        label: 'Usuarios',
        redirectTo: '/users'
    },
    {
        label: 'Publicaciones',
        redirectTo: '/posts',
        dropdownForm: {
            name: 'numberPosts',
            buttonText: 'Ver',
            placeholder: 'Número posts',
            getFormFields: ({ numberPosts }: any) => {
                setNumberPosts(numberPosts as number);
                navigate('/posts');
            },
        }
    },
    {
        label: 'Álbumes',
        redirectTo: 'albums',
        dropdownForm: {
            name: 'numberAlbums',
            buttonText: 'Ver',
            placeholder: 'Número álbumes',
            getFormFields: ({ numberAlbums }: any) => {
                setNumberAlbums(numberAlbums as number);
                navigate('/albums');
            },
        },
    }
];
