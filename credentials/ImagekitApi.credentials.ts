import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

function getTodayDate() {
	const today = new Date();
	return today.toISOString().split('T')[0];
}

export class ImagekitApi implements ICredentialType {
	name = 'imagekitApi';

	displayName = 'ImageKit API';

	icon = { light: 'file:../nodes/Imagekit/imagekit.svg', dark: 'file:../nodes/Imagekit/imagekit.svg' } satisfies Icon;

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-imagekit?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Private Key',
			name: 'privateKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.privateKey}}',
				password: '',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.imagekit.io',
			url: '/v1/accounts/usage',
			qs: {
				startDate: getTodayDate(),
				endDate: getTodayDate(),
			},
		},
	};
}
