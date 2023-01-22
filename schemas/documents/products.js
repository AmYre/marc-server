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
			validation: (Rule) => Rule.required(),
			options: { hotspot: true },
		},
		{
			name: 'description',
			title: 'Description',
			type: 'tradDesc',
		},
		{
			name: 'images',
			title: "Galerie d'images",
			type: 'images',
		},
		{
			name: 'slugfr',
			title: 'Slug Français',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title.fr',
				maxLength: 96,
			},
		},
		{
			name: 'slugen',
			title: 'Slug Anglais',
			type: 'slug',
			options: {
				source: 'title.en',
				maxLength: 96,
			},
		},
		{
			name: 'slugru',
			title: 'Slug Russe',
			type: 'slug',
			options: {
				source: 'title.ru',
				maxLength: 96,
			},
		},
		{
			name: 'slugcn',
			title: 'Slug Chinois',
			type: 'slug',
			options: {
				source: 'title.cn',
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
			name: 'artists',
			title: 'Artiste',
			type: 'reference',
			to: { type: 'artists' },
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
			title: 'title.fr',
			manufactor: 'title',
			media: 'image',
		},
	},
};
