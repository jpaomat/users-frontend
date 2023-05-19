import { render, screen } from '@testing-library/react';
import { defaultProps } from './mocks';
import { CardList } from '../CardList';

describe('<UserItem /> component', () => {

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<CardList dataList={defaultProps}/>
		);
		expect(container).toMatchSnapshot();
	});

	it('should find the description text in the component', () => {
		render(<CardList dataList={defaultProps}/>);
		expect(screen.getByText(defaultProps[0].description)).toBeTruthy();
	});
});