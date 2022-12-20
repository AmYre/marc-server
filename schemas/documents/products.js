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
			validation: (Rule) => Rule.required().warning('Remplissez ce champs'),
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
			title: "Galerie d'images",
			type: 'images',
		},
		{
			name: 'slugfr',
			title: 'Slug Français',
			type: 'slug',
			initialValue: 'title.fr',
			validation: (Rule) => Rule.custom((field, context) => (context.document.title.fr && field === undefined ? 'Remplissez ce champs' : true)).warning('Remplissez ce champs'),
			options: {
				source: 'title.fr',
				maxLength: 96,
			},
		},
		{
			name: 'slugen',
			title: 'Slug Anglais',
			type: 'slug',
			validation: (Rule) => Rule.required().min(10).max(80).warning('Remplissez ce champs'),
			options: {
				source: 'title.en',
				maxLength: 96,
			},
		},
		{
			name: 'slugru',
			title: 'Slug Russe',
			type: 'slug',
			initialValue: 'title.fr',
			options: {
				source: 'title.ru',
				maxLength: 96,
			},
		},
		{
			name: 'slugcn',
			title: 'Slug Chinois',
			type: 'slug',
			initialValue: 'title.fr',
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
