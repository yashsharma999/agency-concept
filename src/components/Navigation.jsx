'use client';

import { homeNavMenu } from '@/constants';
import Link from 'next/link';
import ContactUsSheet from './ContactUsSheet';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

// const navMenu = [
//   {
//     lable: 'Home',
//     href: '/',
//   },
//   {
//     lable: 'How it works',
//     href: '/how-it-works',
//   },
//   {
//     custom: true,
//     element: <ContactUsSheet />,
//   },
//   {
//     custom: true,
//     element: (
//       <Link href={'/app'}>
//         <Button>Go to App</Button>
//       </Link>
//     ),
//   },
// ];

export default function Navigation({ menu }) {
  return (
    <div className='flex justify-center items-center'>
      <ul className='bg-white flex gap-4 py-4 px-8 border-[1px] border-slate-100 rounded-lg shadow-sm'>
        {menu?.map((menu, i) => {
          if (menu.custom) {
            //custom menu item; button etc.
            return (
              <div key={i} className='flex'>
                {menu.element}
              </div>
            );
          } else {
            return (
              <NavigationMenu key={i}>
                <NavigationMenuItem>
                  <Link href={menu.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {menu.label}
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
