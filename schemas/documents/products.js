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
			name: 'alt',
			title: 'Image Alt',
			type: 'tradText',
		},
		{
			name: 'video',
			title: 'Video URL',
			type: 'slug',
			options: {
				source: 'title.fr',
				maxLength: 96,
			},
		},
		{
			name: 'youtube_fr',
			title: 'Youtube FR',
			type: 'string',
		},
		{
			name : 'youtube_en',
			title : 'Youtube EN',
			type : 'string'
		},
		{
			name : 'youtube_ru',
			title : 'Youtube RU',
			type : 'string'
		},
		{
			name : 'youtube_cn',
			title : 'Youtube CN',
			type : 'string'
		},
		{
			name : 'youtube_ko',
			title : 'Youtube KO',
			type : 'string'
		},
		{
			name : 'youtube_jp',
			title : 'Youtube JP',
			type : 'string'
		},
		{
			name : 'youtube_es',
			title : 'Youtube ES',
			type : 'string'
		},
		{
			name : 'youtube_it',
			title : 'Youtube IT',
			type : 'string'
		},
		{
			name : 'youtube_po',
			title : 'Youtube PO',
			type : 'string'
		},
		{
			name : 'youtube_tu',
			title : 'Youtube TU',
			type : 'string'
		},
		{
			name : 'youtube_ar',
			title : 'Youtube AR',
			type : 'string'
		},
		{
			name: 'variants',
			title: 'Variantes Vidéo',
			type: 'array',
			of: [{type: 'string'}]
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
			type: 'array',
			of: [{ type: 'reference', to: { type: 'artists' }, }],
		},
		{
			name: 'category',
			title: 'Catégorie',
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
