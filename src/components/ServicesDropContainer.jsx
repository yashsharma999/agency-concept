import { useServiceContext } from '@/providers/ServicesContext';
import { useDrop } from 'react-dnd';
import ServiceCard from './common/ServiceCard';
import HandleNext from './HandleNext';
import { Button } from './ui/button';

export default function ServicesDropContainer() {
  const { openServices, cart, setCart, setOpenServices } = useServiceContext();

  const [{ isDroppable }, ref] = useDrop(
    () => ({
      accept: ['SERVICE_CARD'],
      canDrop: (item) => {
        //if item.id is not already in open services
        const alreadyExists = cart?.find((service) => {
          return service.id === item.id;
        });

        if (alreadyExists) {
          return false;
        } else {
          return true;
        }
      },
      drop: (item, monitor) => {
        setCart((prev) => [...prev, item]);

        setOpenServices(
          openServices.filter((service) => service.id !== item.id)
        );
      },
      collect: (monitor) => {
        return { isDroppable: !!monitor.canDrop() };
      },
    }),
    [cart, openServices]
  );

  return (
    <div
      ref={ref}
      className={`h-screen overflow-y-scroll w-[450px] fixed top-0 right-0 bg-slate-100 p-2 flex flex-col gap-2
      transition delay-100 ${isDroppable && 'bg-slate-200'}
      `}
    >
      {cart?.map((item) => (
        <ServiceCard
          key={item.id}
          style={{ height: 'auto' }}
          data={item}
          minimalView={true}
        />
      ))}
      <HandleNext cart={cart} />
    </div>
  );
}
