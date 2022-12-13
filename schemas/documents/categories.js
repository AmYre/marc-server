import { FiTag } from 'react-icons/fi';

export default {
	name: 'categories',
	title: 'Categories',
	type: 'document',
	icon: FiTag,
	fields: [
		{
			name: 'title',
			title: 'Titre',
			type: 'tradText',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title.fr',
				maxLength: 96,
			},
		},
		{
			name: 'parents',
			title: 'Hiérarchie',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'categories' }],
					options: {
						filter: '!defined(parent)',
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title.fr',
			subtitle: 'parent.title',
		},
		prepare: ({ title, subtitle }) => ({
			title,
			subtitle: subtitle ? `– ${subtitle}` : ``,
		}),
	},
};
