import { updateProductParamsSchema } from '@/main/docs/schemas/index'

export const updateProductPath = {
  patch: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['Product'],
    summary: 'API to update a product in the system',
    requestBody: {
      content: {
        'application/json': {
          schema: updateProductParamsSchema,
        },
      },
    },
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
        description: 'Record updated successfully',
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
