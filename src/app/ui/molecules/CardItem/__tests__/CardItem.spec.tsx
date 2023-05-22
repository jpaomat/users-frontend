import { render, screen } from '@testing-library/react';
import { CardItem } from '../../CardItem/CardItem';
import { defaultProps } from './mocks';
import { MemoryRouter } from 'react-router-dom';

describe('<UserItem /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<CardItem {...defaultProps}/>
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it('should find the description text in the component', () => {
		render(<CardItem {...defaultProps}/>);
		expect(screen.getByText(defaultProps.description)).toBeTruthy();
	});
});