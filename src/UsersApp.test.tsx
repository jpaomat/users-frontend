import { render } from '@testing-library/react';
import UsersApp from './UsersApp';

describe('<UserApp /> component', () => {
    it('should render component', () => {
		const {container} = render(<UsersApp />);
		expect(container).toMatchSnapshot();
	});
});
