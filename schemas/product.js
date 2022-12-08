export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'ref',
			title: 'REF',
			type: 'string',
		},
		{
			name: 'title',
			title: 'Titre',
			type: 'string',
		},
		{
			name: 'images',
			title: 'Images',
			type: 'images',
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
			to: { type: 'artiste' },
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
		},
		{
			name: 'description',
			title: 'Description',
			type: 'description',
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
	],

	preview: {
		select: {
			title: 'title',
			manufactor: 'description',
			media: 'images[0]',
		},
	},
};
