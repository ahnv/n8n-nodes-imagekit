import type { INodeProperties } from 'n8n-workflow';
import { assetListDescription } from './list';

const showOnlyForAssets = {
	resource: ['asset'],
};

export const assetDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAssets,
		},
		options: [
			{
				name: 'List and Search',
				value: 'list',
				action: 'List and search assets',
				description: 'This API can list all the uploaded files and folders in your ImageKit.io media library. In addition, you can fine-tune your query by specifying various filters by generating a query string in a Lucene-like syntax and provide this generated string as the value of the searchQuery.',
				routing: {
					request: {
						method: 'GET',
                        url: '/v1/files',
                        qs: {
                            limit: '={{ $parameter.limit }}',
                            skip: '={{ $parameter.skip }}',
                        }
                    },
                    operations: {
                        pagination: {
                            type: 'offset',
                            properties: {
                                limitParameter: '={{ $parameter.limit }}',
                                offsetParameter: '={{ $parameter.skip }}',
                                pageSize: 100,
                                type: 'query',
                            },
                        }
                    }
				},
			},
		],
		default: 'list',
	},
	...assetListDescription,
];
