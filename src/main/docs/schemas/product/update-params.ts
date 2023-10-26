export const updateProductParamsSchema = {
  type: 'object',
  properties: {
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
}
