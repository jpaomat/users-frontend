import { FaUserAlt } from 'react-icons/fa';
import { UserIconProps } from '../../../interfaces';
import './UserIcon.scss';

export const UserIcon = ({icon, userName}: UserIconProps) => {
  return (
    <div className='user-section'>
			<FaUserAlt className='user-section__icon' />
			<p>@{userName}</p>
		</div>
  );
};
