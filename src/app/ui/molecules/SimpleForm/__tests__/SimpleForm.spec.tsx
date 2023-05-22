import { fireEvent, render } from '@testing-library/react';
import { SimpleForm } from '../SimpleForm';
import { defaultMock } from './mocks';

describe('<SimpleForm /> component', () => { 
    it('should render component', () => {
		const {container} = render(<SimpleForm {...defaultMock} />);
        expect(container.querySelector('input')?.value).toBe(defaultMock.inputValue);
		expect(container).toMatchSnapshot();
	});

	it('should cleared the input when the clear button is clicked', () => {
		const {container} = render(<SimpleForm {...defaultMock} />);
		const buttonElement = container.querySelector('button');
        fireEvent.click(buttonElement as Element);
        expect(container.querySelector('input')?.value).toBe(defaultMock.inputValue);
	});
 });
