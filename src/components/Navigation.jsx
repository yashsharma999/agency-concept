'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { usePathname } from 'next/navigation';

export default function Navigation({ menu }) {
  const pathname = usePathname();

  return (
    <div className='relative flex flex-col justify-center items-center'>
      <div className='bg-white min-w-[340px] py-4 px-4 sm:px-8 border-[1px] border-slate-100 rounded-lg shadow-sm'>
        <ul className='hidden md:flex gap-4'>
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
                        style={{
                          background:
                            pathname.includes(menu.href) && 'whitesmoke',
                        }}
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
        <div className='md:hidden flex items-center justify-between'>
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
                  <NavigationMenuItem className='list-none	'>
                    <Link href={menu.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        style={{
                          background:
                            pathname.includes(menu.href) && 'whitesmoke',
                          fontSize: '12px',
                        }}
                        className={navigationMenuTriggerStyle()}
                      >
                        {menu.label.slice(0, 1)}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenu>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
