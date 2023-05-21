import { ChangeEvent } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { FormDropdownProps } from '../../../interfaces';
import { useForm } from '../../../hooks/general/useForm';
import './SimpleForm.scss';

export const SimpleForm = ({ name, placeholder, buttonText, getFormFields, onCloseForm }: FormDropdownProps) => {
	const { formState, onInputChange, onReset } = useForm({
		[name]: ''
	});
	const onClick = () => {
		getFormFields(formState);
		onCloseForm && onCloseForm();
        onReset();
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		onInputChange(e);
	};

	return (
			<div className='simple-form'>
				<InputGroup size='sm'>
					<Form.Control name={name} value={formState[name]} placeholder={placeholder} onChange={onChange} />
					<Button variant='outline-secondary' id='button-addon2' onClick={onClick}>
						{buttonText}
					</Button>
				</InputGroup>
			</div>
	);
};
