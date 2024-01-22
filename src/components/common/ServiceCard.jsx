'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { categories } from '@/constants';
import { useServiceContext } from '@/providers/ServicesContext';
import { useDrag } from 'react-dnd';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import ViewDetails from '../ViewDetails';

export default function ServiceCard({ data, minimalView = false, style = {} }) {
  const {
    id,
    title,
    description,
    categories: categoryArr,
    icon,
    price,
  } = data || {};
  const { dragNDropDisabled, cart, setCart, setOpenServices, openServices } =
    useServiceContext();
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'SERVICE_CARD',
      item: data,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [data]
  );

  const addToCart = () => {
    setCart((prev) => [...prev, data]);
    setOpenServices(openServices.filter((service) => service.id !== data.id));
  };

  const removeFromCart = () => {
    setOpenServices((prev) => [...prev, data]);
    setCart(cart.filter((service) => service.id !== data.id));
  };

  return (
    <Card
      style={style}
      className='w-full flex flex-col justify-between h-[350px]'
      ref={dragRef}
    >
      <CardHeader>
        <CardTitle>
          {title}
          &nbsp;
          <span className='text-[30px]'>{icon}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {minimalView && dragNDropDisabled && (
        <CardFooter>
          <Button
            variant='outline'
            onClick={removeFromCart}
            className='w-full bg-red-400 text-white hover:bg-red-700 hover:text-white'
          >
            Remove
          </Button>
        </CardFooter>
      )}
      {!minimalView && (
        <>
          <CardContent>
            <div className='flex gap-4 items-center'>
              {' '}
              <h2 className='text-2xl'>{`$${price[0]} - $${price[1]}`}</h2>
            </div>

            {/* <ul className='flex gap-2'>
              {categoryArr?.map((item) => {
                return (
                  <Badge variant={'secondary'} key={item.id}>
                    {categories.find((data) => data.id === item)?.title}
                  </Badge>
                );
              })}
            </ul> */}
          </CardContent>
          <CardFooter className='flex flex-col gap-4'>
            <ViewDetails data={data} />
            {dragNDropDisabled && (
              <Button onClick={addToCart} className='w-full'>
                Add to stack
              </Button>
            )}
          </CardFooter>
        </>
      )}
    </Card>
  );
}
