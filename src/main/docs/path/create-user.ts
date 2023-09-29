export const createUserPath = {
  post: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['User'],
    summary: 'API to register a new user in the system',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createUserParams',
          },
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
