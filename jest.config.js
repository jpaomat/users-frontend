module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: { // npm i --save-dev babel-jest
		'^.+\\.(css|less|scss)$': 'babel-jest',
	},
	projects: [
		/**
	 * Common project's components typically written with React
	 */
		{
			displayName: 'components',
			testMatch: ['<rootDir>/src/app/**/__tests__/**/*.spec.(jsx|tsx|js|ts)'],
			testEnvironment: 'jsdom',
			setupFilesAfterEnv: [
				'<rootDir>/jest.env.js',
			],
			coveragePathIgnorePatterns: [
				'<rootDir>/app/context/TracksContext',
			],
			moduleNameMapper: {
				'^.+\\.(css|less|scss)$': 'babel-jest',
			},
			verbose: true,

			// Module file extensions for importing
			moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
			transform: {
				'^.+\\.tsx?$': 'ts-jest'
			},
		}
	],
  	transformIgnorePatterns: ['node_modules/(?!axios)'],
};
