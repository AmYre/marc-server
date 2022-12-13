import languages from './languages';

export default {
	name: 'tradText',
	type: 'object',
	fieldsets: [
		{
			title: 'Traductions',
			name: 'traductions',
			options: { collapsible: true },
		},
	],
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: 'string',
		fieldset: lang.isDefault ? null : 'traductions',
	})),
};
