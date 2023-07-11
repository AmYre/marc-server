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
			name: 'alt',
			title: 'Image Alt',
			type: 'tradText',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'tradDesc',
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
};
