import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';

export default defineConfig({
	title: 'marc-admin',
	projectId: 'r1wp5yv2',
	dataset: 'production',
	plugins: [
		deskTool({
			structure: deskStructure,
		}),
		visionTool(),
	],
	tools: (prev) => {
		// 👇 Uses environment variables set by Vite in development mode
		if (import.meta.env.DEV) {
			return prev;
		}
		return prev.filter((tool) => tool.name !== 'vision');
	},
	schema: {
		types: schemas,
	},
	document: {
		newDocumentOptions: (prev, { creationContext }) => {
			if (creationContext.type === 'global') {
				return prev.filter((templateItem) => templateItem.templateId != 'settings');
			}
			return prev;
		},
		actions: (prev) => {
			return prev;
		},
	},
});
