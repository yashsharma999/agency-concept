import { useServiceContext } from '@/providers/ServicesContext';
import { useDrop } from 'react-dnd';
import ServiceCard from './common/ServiceCard';

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
      className={`w-[40%] h-full bg-slate-100 p-2 flex flex-col gap-2
      transition delay-100 ${isDroppable && 'bg-slate-200'}
      `}
    >
      {cart?.map((item) => (
        <ServiceCard key={item.id} data={item} minimalView={true} />
      ))}
    </div>
  );
}
