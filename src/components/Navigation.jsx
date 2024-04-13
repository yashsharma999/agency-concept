'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { usePathname } from 'next/navigation';
import { AccountBtn } from '@/constants/menu';
import Logo from './common/Logo';
import Image from 'next/image';
import featuredIcon from '@/assets/icons/featured_menu.svg';
import productsIcon from '@/assets/icons/products_icon.svg';
import ordersIcon from '@/assets/icons/orders_icon.svg';
import dealsIcon from '@/assets/icons/deals_icon.svg';

export default function Navigation({ menu }) {
  const pathname = usePathname();

  return (
    <div className='relative flex flex-col justify-center items-center'>
      <div className='bg-white flex items-center md:justify-between w-screen py-3 px-2 md:px-4 sm:px-8 border-[1px] border-slate-100  shadow-sm'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
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
        <div className='md:hidden flex w-full items-center justify-between'>
          {menu?.map((menu, i) => {
            if (menu.custom) {
              //custom menu item; button etc.
              return menu?.home ? (
                <div key={i} className='flex'>
                  {menu.element}
                </div>
              ) : null;
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
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          width: '75px',
                        }}
                        className={navigationMenuTriggerStyle()}
                      >
                        <Image
                          src={menuIcon(menu.label) ?? ''}
                          alt={menu.label}
                          width={14}
                          height={14}
                        />

                        <p className={`text-[10px]`}>{menu.label}</p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenu>
              );
            }
          })}
        </div>
        {pathname !== '/' && (
          <div className='hidden md:flex'>
            <AccountBtn />
          </div>
        )}
      </div>
    </div>
  );
}

const menuIcon = (label) => {
  switch (label) {
    case 'Featured':
      return featuredIcon;
    case 'Products':
      return productsIcon;
    case 'Orders':
      return ordersIcon;
    case 'Deals':
      return dealsIcon;
    default:
      return featuredIcon;
  }
};
