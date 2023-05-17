import { render } from '@testing-library/react';
const { Users } = require('../Users');

describe('<UserList /> component', () => {
    it('should render component', () => {
		const {container} = render(<Users />);
		expect(container).toMatchSnapshot();
	});
});
