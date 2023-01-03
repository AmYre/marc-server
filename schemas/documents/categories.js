import { FiTag } from 'react-icons/fi';

export default {
	name: 'category',
	title: 'Category',
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
	],
	preview: {
		select: {
			title: 'title.fr',
		},
	},
};
