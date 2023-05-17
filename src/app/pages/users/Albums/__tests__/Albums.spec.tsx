import { render } from '@testing-library/react';
import { Albums } from '../Albums';

describe('<Albums /> component', () => {
    it('should render component', () => {
		const {container} = render(<Albums />);
		expect(container).toMatchSnapshot();
	});
});
