import { render } from '@testing-library/react';
import { Posts } from '../Posts';

describe('<Posts /> component', () => {
    it('should render component', () => {
		const {container} = render(<Posts />);
		expect(container).toMatchSnapshot();
	});
});
