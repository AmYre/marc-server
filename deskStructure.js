export default (S) =>
	S.list()
		.title('Content')
		.items([...S.documentTypeListItems().filter((listItem) => !['settings'].includes(listItem.getId()))]);
