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
import hamMenu from '@/assets/icons/menu.svg';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Navigation({ menu }) {
  const pathname = usePathname();
  const landingPage = pathname === '/';
  const { width } = useWindowSize();
  const isDesktop = width > 768;
  console.log('isDesktop', isDesktop, width);
  return (
    <div className='relative flex flex-col justify-center items-center'>
      {/* ya toh landing page ho ya fir desktop view ho toh dikhana hai */}
      {landingPage || isDesktop ? (
        <div className='border-[1px] border-slate-100 w-screen '>
          <div className='backdrop-blur-lg	 max-w-[1200px] mx-auto flex items-center justify-between  py-3 px-8 '>
            <div className=''>
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
                                pathname.includes(menu.href) && 'black',
                              color: pathname.includes(menu.href) && 'white',
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

            <div className='md:hidden flex'>
              <Sheet>
                <SheetTrigger>
                  <Image src={hamMenu} alt='menu' />
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-4'>
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
                                    pathname.includes(menu.href) &&
                                    'whitesmoke',
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
                </SheetContent>
              </Sheet>
            </div>
            {pathname !== '/' && (
              <div className='hidden md:flex'>
                <AccountBtn />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='bg-white py-2 px-4 border-[1px] border-slate-100 w-screen flex items-center justify-between list-none'>
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
      )}
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
