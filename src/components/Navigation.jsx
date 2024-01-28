'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const navMenu = [
  {
    lable: 'Home',
    href: '/',
  },
  {
    lable: 'How it works',
    href: '/how-it-works',
  },
  {
    lable: 'Contact Us',
    href: '/contact-us',
  },
  {
    custom: true,
    element: (
      <Link href={'/app'}>
        <Button>Go to App</Button>
      </Link>
    ),
  },
];

export default function Navigation() {
  return (
    <div className='flex justify-center items-center'>
      <ul className='bg-white flex gap-4 py-4 px-8 border-[1px] border-slate-100 rounded-lg shadow-sm'>
        {navMenu?.map((menu, i) => {
          if (menu.custom) {
            //custom menu item; button etc.
            return menu.element;
          } else {
            return (
              <NavigationMenu key={i}>
                <NavigationMenuItem>
                  <Link href={menu.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {menu.lable}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenu>
            );
          }
        })}
      </ul>
    </div>
  );
}
