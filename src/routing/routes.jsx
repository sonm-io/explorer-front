import React from 'react';
import { App } from 'src/layout/app';

let defaultAction;

export const createRoutes = loader => navigate => [
    {
        path: '/',
        action: async ctx => {
            const params = await ctx.next();

            return {
                content: (
                    <App
                        className={
                            params.props ? params.props.className : undefined
                        }
                    >
                        {params.content}
                    </App>
                ),
                browserTabTitle: params.browserTabTitle,
            };
        },
        children: [
            {
                path: '/transactions',
                action: async (ctx, params) => ({
                    browserTabTitle: 'Transaction list',
                    pageTitle: 'Transaction list',
                    content: (
                        <div>Transaction list</div>
                    ),
                }),
                children: [
                    {
                        path: '/:id',
                        action: async (ctx, params) => ({
                            browserTabTitle: `${params.id} details`,
                            pageTitle: 'Transaction details',
                            content: (
                                <div>Transaction details</div>
                            ),
                        }),
                    },
                ],
            },
            defaultAction = {

            },
        ],
    }
];
