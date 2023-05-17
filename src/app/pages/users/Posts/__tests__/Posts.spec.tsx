import { render } from '@testing-library/react';
import { Posts } from '../Posts';

describe('<Albums /> component', () => {
    it('should render component', () => {
		const {container} = render(<Posts />);
		expect(container).toMatchSnapshot();
	});
});
