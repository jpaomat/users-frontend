import PropTypes from 'prop-types';
import './ButtonApp.scss';
import { IButtonApp } from '../../interfaces';

export const ButtonApp = ({ children, size, variant, isDisabled, onClick }: IButtonApp) => {
	return (
		<button
			className={`btn btn-${variant} btn-${size}`}
			disabled={isDisabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

ButtonApp.defaultProps = {
	isDisabled: false,
	size: 'sm',
	variant: 'primary',
};

ButtonApp.propTypes = {
	children: PropTypes.element.isRequired,
	isDisabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string,
	variant: PropTypes.string,
};
