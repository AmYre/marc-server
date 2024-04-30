const languages = [
	{ id: "fr", title: "Français" },
	{ id: "en", title: "Anglais" },
	{ id: "ru", title: "Russe" },
	{ id: "cn", title: "Chinois" },
	{ id: "es", title: "Espagnol" },
	{ id: "it", title: "Italien" },
	{ id: "po", title: "Polonais" },
	{ id: "jp", title: "Japonais" },
	{ id: "ar", title: "Arabe" },
	{ id: "tu", title: "Turque" },
	{ id: "kr", title: "Korean" },
];

export default {
	name: "tradYoutube",
	title: "Traductions",
	type: "object",
	fieldsets: [
		{
			title: "Youtube ID",
			name: "youtube",
			options: { collapsible: true },
		},
	],
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "string",
		fieldset: lang.isDefault ? null : "youtube",
	})),
};
