export const listProductsResultSchema = {
  type: 'object',
  properties: {
    products: {
      type: 'array',
      items: {
        properties: {
          id: {
            type: 'number',
          },
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
          discountPercentage: {
            type: 'number',
          },
          rating: {
            type: 'number',
          },
          stock: {
            type: 'number',
          },
          brand: {
            type: 'string',
          },
          category: {
            type: 'string',
          },
        },
      },
    },
    pagination: {
      type: 'object',
      properties: {
        page: {
          type: 'number',
        },
        total: {
          type: 'number',
        },
        items: {
          type: 'number',
        },
      },
    },
  },
}
