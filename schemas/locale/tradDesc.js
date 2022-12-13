import languages from './languages';

export default {
	name: 'tradDesc',
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
		type: 'description',
		fieldset: lang.isDefault ? null : 'traductions',
	})),
};
