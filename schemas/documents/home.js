import { GiPalette } from 'react-icons/gi';

export default {
	name: 'home',
	title: 'Accueil',
	type: 'document',
	icon: GiPalette,
	fields: [
		{
			name: 'title',
			title: 'Titre',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image de fond',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
};
