import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../../ui/organisms';
import { Albums, Posts, Users } from '../';

export const UsersRouter = () => {
    return (
      <>
        <Navbar size='bg' type='dark' />
        <div className='container'>
          <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/' element={<Navigate to={'users'} />} />
          </Routes>
        </div>
      </>
    );
  };