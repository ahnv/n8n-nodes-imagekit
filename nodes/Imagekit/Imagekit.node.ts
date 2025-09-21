import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { assetDescription } from './resources/asset';

export class Imagekit implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Imagekit',
		name: 'imagekit',
		icon: { light: 'file:imagekit.svg', dark: 'file:imagekit.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Imagekit API',
		defaults: {
			name: 'Imagekit',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'imagekitApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.imagekit.io',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Asset',
						value: 'asset',
					},
					{
						name: 'File',
						value: 'file',
					},
					{
						name: 'Folder',
						value: 'folder',
					},
					{
						name: 'Custom Metadata Fields',
						value: 'customMetadataFields',
					},
					{
						name: 'Purge Cache',
						value: 'purgeCache',
					},
					{
						name: 'Metadata',
						value: 'metadata',
					},
					{
						name: 'Account',
						value: 'account',
					},
				],
				default: 'user',
			},
			...assetDescription,
		],
	};
}
