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
    </div>
  );
}
