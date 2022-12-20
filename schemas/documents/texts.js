import { BsTranslate } from 'react-icons/bs';

export default {
	name: 'texts',
	title: 'Textes',
	type: 'document',
	icon: BsTranslate,
	fields: [
		{
			name: 'title',
			title: 'Titre',
			type: 'string',
		},
		{
			name: 'text',
			title: 'Traduction',
			type: 'tradText',
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
};
