// ./schemas/product.js

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'original_price',
      title: 'Original Price',
      type: 'number',
    },
    {
      name: 'selling_price',
      title: 'Selling Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    featured: false,
  },
};
