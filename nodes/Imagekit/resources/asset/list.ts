import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetList = {
	operation: ['list'],
	resource: ['asset'],
};

export const assetListDescription: INodeProperties[] = [
    {
        displayName: 'Limit',
		name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
            maxValue: 1000,
        },
		displayOptions: { show: showOnlyForAssetList },
		default: 1000,
		description: "The maximum number of results to return.",
    },
    {
        displayName: 'Skip',
		name: 'skip',
        type: 'number',
        typeOptions: {
            minValue: 0,
        },
		displayOptions: { show: showOnlyForAssetList },
		default: 0,
		description: "The number of results to skip.",
    }
];
