import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const { default: ContactUsSheet } = require('@/components/ContactUsSheet');
const { default: CartBtn } = require('@/components/CartBtn');
const { Button } = require('@/components/ui/button');
const { default: Link } = require('next/link');
const icon = require('@/assets/icons/featured.svg');

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

export const AccountBtn = () => {
  return (
    <div className='flex'>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Button>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </Button>
      </SignedOut>
    </div>
  );
};

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
    element: <AccountBtn />,
  },
];
