import { loadProductByIdResultSchema } from '@/main/docs/schemas/index'

export const loadProductByIdPath = {
  get: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['Product'],
    summary: 'API to load a product in the system',
    parameters: [
      {
        in: 'path',
        name: 'product_id',
        required: true,
        schema: {
          type: 'number',
        },
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: loadProductByIdResultSchema,
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
