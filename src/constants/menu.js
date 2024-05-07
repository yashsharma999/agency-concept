import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const { default: ContactUsSheet } = require('@/components/ContactUsSheet');
const { default: CartBtn } = require('@/components/CartBtn');
const { Button } = require('@/components/ui/button');
const { default: Link } = require('next/link');

export const homeNavMenu = [
  // {
  //   label: 'Home',
  //   href: '/',
  // },
  {
    custom: true,
    element: (
      <Link href={'#how-it-works'}>
        <Button variant='ghost'>How it works</Button>
      </Link>
    ),
    home: true,
  },
  {
    custom: true,
    element: (
      <Link href={'/contact'}>
        <Button variant='ghost'>Contact Us</Button>
      </Link>
    ),
    home: true,
  },
  {
    custom: true,
    element: (
      <Link className='w-full' href={'/featured'}>
        <Button className='w-full'>Go to App</Button>
      </Link>
    ),
    home: true,
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
  // {
  //   custom: true,
  //   element: <AccountBtn />,
  // },
];
