const { revalidatePath } = require('next/cache');
const { default: prisma } = require('./client');

export const removeItem = async (id) => {
  'use server';

  const item = await prisma.cartItem.delete({
    where: {
      cartItemId: id,
    },
  });

  revalidatePath('/cart');
};
