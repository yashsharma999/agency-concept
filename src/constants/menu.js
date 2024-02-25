const { default: ContactUsSheet } = require('@/components/ContactUsSheet');
const { default: CartBtn } = require('@/components/CartBtn');
const { Button } = require('@/components/ui/button');
const { default: Link } = require('next/link');

export const homeNavMenu = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'How it works',
    href: '/how-it-works',
  },
  {
    custom: true,
    element: <ContactUsSheet />,
  },
  {
    custom: true,
    element: (
      <Link href={'/featured'}>
        <Button>Go to App</Button>
      </Link>
    ),
  },
];

export const appMenu = [
  {
    label: 'Featured',
    href: '/featured',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Orders',
    href: '/orders',
  },
  {
    label: 'Deals',
    href: '/deals',
  },
  {
    custom: true,
    element: <CartBtn />,
  },
  {
    custom: true,
    element: (
      <Link href={'/login'}>
        <Button>Login</Button>
      </Link>
    ),
  },
];
