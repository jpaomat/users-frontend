import { UsersProvider } from './app/context/UsersProvider';
import { AppRouter } from './app/router/AppRouter';
import './UsersApp.scss';

function UsersApp() {
  return (
   <UsersProvider>
      <AppRouter />
   </UsersProvider>
  );
}

export default UsersApp;
