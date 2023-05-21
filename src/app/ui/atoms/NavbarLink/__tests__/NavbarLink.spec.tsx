import { fireEvent, render, screen } from '@testing-library/react';
import { NavbarLink } from '../NavbarLink';
import { MemoryRouter } from 'react-router-dom';

describe('<NavbarLink /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<NavbarLink label='test' redirectTo='/test'/>
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	test('should show the text link', () => {
		const dataLink = {
			label: 'Productos',
			redirectTo:'/products'
		};
		render(
			<MemoryRouter>
				<NavbarLink {...dataLink} />
			</MemoryRouter>
		);
		fireEvent.click(screen.getByText(dataLink.label));
		expect(screen.getByText(dataLink.label)).toBeTruthy();
	});
});
