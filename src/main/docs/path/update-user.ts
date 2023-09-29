export const updateUserPath = {
  patch: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['User'],
    summary: 'API to update a user in the system',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateUserParams',
          },
        },
      },
    },
    parameters: [
      {
        in: 'path',
        name: 'user_id',
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
