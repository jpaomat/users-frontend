import { ButtonAppProps } from '../../../interfaces';
import './ButtonApp.scss';

export const ButtonApp = ({ children, type, size, variant, isDisabled, onClick }: ButtonAppProps) => {
	return (
		<button
			type={type}
			className={`btn btn-${variant} btn-${size}`}
			disabled={isDisabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

ButtonApp.defaultProps = {
	type: 'button',
	isDisabled: false
};
