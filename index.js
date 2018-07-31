module.exports = {
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [0, 'never'],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [2, 'always', 'sentence-case'],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [2, 'always', [
            'breaking',
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'publish',
            'refactor',
            'revert',
            'squash',
            'style',
            'test',
            'upgrade'
        ]]
	}
};
