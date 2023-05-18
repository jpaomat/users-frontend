import { fireEvent, render, screen } from '@testing-library/react';
import { NavbarAuth } from '../NavbarAuth';

describe('<NavbarAuth /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<NavbarAuth userName='Maria' />
		);
		expect(container).toMatchSnapshot();
	});

	test('should execute onclick event', () => {
		render(
			<NavbarAuth userName='Maria' />
		);
		fireEvent.click(screen.getByText('Logout'));
		expect(screen.getByText('Logout')).toBeTruthy();
	});
});
