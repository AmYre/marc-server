import { GiMustache } from 'react-icons/gi';

export default {
	name: 'artists',
	title: 'Artistes',
	type: 'document',
	icon: GiMustache,
	fields: [
		{
			name: 'title',
			title: 'Nom',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'image',
			title: 'Portrait',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'description',
			title: 'Description',
			type: 'tradDesc',
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
};
