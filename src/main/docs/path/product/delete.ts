export const deleteProductPath = {
  delete: {
    security: [
      {
        authToken: [],
      },
    ],
    tags: ['Product'],
    summary: 'API to delete a product in the system',
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
      204: {
        description: 'Product deleted successfully',
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
