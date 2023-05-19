import { Route, Routes } from 'react-router-dom';
import { UsersRouter } from '../pages/users/routes/UsersRouter';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*'  element={< UsersRouter />}/>{' '}
    </Routes>
  );
};
