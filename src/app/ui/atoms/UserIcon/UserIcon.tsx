import { FaUserAlt } from 'react-icons/fa';
import { IUserIcon } from '../../interfaces';
import './UserIcon.scss';

export const UserIcon = ({icon, userName}: IUserIcon) => {
  return (
    <div className='user-section'>
			<FaUserAlt className='user-section__icon' />
			<p>@{userName}</p>
		</div>
  );
};
