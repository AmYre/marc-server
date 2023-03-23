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
		{
			name: 'parent',
			type: 'reference',
			to: [{type: 'category'}],
			options: {
			  filter: '!defined(parent)',
			},
		  },
	],
	preview: {
		select: {
			title: 'title.fr',
			subtitle: 'parent.title.fr',
		},
		prepare: ({title, subtitle}) => ({
			title,
			subtitle: subtitle ? `– ${subtitle}` : ``,
		  }),
	},
};
