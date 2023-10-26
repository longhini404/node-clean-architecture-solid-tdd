export const loadProductByIdResultSchema = {
  type: 'object',
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
}
