import { GiIonicColumn } from 'react-icons/gi';

export default {
	name: 'products',
	title: 'Créations',
	type: 'document',
	icon: GiIonicColumn,
	fields: [
		{
			name: 'ref',
			title: 'REF',
			type: 'string',
		},
		{
			name: 'title',
			title: 'Titre',
			type: 'tradText',
		},
		{
			name: 'image',
			title: 'Image principale',
			type: 'image',
			options: { hotspot: true },
		},
		{
			name: 'description',
			title: 'Description',
			type: 'tradDesc',
		},
		{
			name: 'images',
			title: "Gelerie d'images",
			type: 'images',
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
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
			options: {
				layout: 'tags',
			},
		},
		{
			name: 'artiste',
			title: 'Artiste',
			type: 'reference',
			to: { type: 'artistes' },
		},
		{
			name: 'category',
			title: 'Catégorie',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'categories' },
				},
			],
		},
	],

	preview: {
		select: {
			title: 'title.fr',
			manufactor: 'title',
			media: 'image',
		},
	},
};
