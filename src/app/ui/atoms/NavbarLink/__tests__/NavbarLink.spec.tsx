import { fireEvent, render, screen } from '@testing-library/react';
import { NavbarLink } from '../NavbarLink';
import { MemoryRouter } from 'react-router-dom';

describe('<NavbarLink /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<NavbarLink text='test' path='/test'/>
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	test('should show the text linl', () => {
		const dataLink = {
			text: 'Productos',
			path:'/products'
		};
		render(
			<MemoryRouter>
				<NavbarLink {...dataLink} />
			</MemoryRouter>
		);
		fireEvent.click(screen.getByText(dataLink.text));
		expect(screen.getByText(dataLink.text)).toBeTruthy();
	});
});
