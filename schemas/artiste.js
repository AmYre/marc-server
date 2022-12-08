export default {
	name: 'artiste',
	title: 'Artiste',
	type: 'document',
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
			name: 'images',
			title: 'Portrait',
			type: 'images',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'description',
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'images[0]',
		},
	},
};
