import { createProductParamsSchema } from '@/main/docs/schemas/index'

export const createProductPath = {
  post: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['Product'],
    summary: 'API to register a new product in the system',
    requestBody: {
      content: {
        'application/json': {
          schema: createProductParamsSchema,
        },
      },
    },
    responses: {
      200: {
        description: 'Record created successfully',
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
