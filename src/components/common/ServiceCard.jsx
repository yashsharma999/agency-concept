'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useDrag } from 'react-dnd';

export default function ServiceCard({ data, minimalView = false }) {
  const { id, title, description } = data || {};

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

  return (
    <Card className='w-full h-fit' ref={dragRef}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {!minimalView && (
        <>
          {' '}
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
