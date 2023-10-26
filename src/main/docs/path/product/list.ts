import { listProductsResultSchema } from '@/main/docs/schemas/index'

export const listProductsPath = {
  get: {
    security: [
      {
        authToken: [],
      },
    ],
    parameters: [
      {
        in: 'query',
        name: 'page',
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'items',
        schema: {
          type: 'string',
        },
      },
    ],
    tags: ['Product'],
    summary: 'API to list products in the system',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: listProductsResultSchema,
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      403: {
        $ref: '#/components/forbidden',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
}
