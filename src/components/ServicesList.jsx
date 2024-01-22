import { useServiceContext } from '@/providers/ServicesContext';
import { useDrop } from 'react-dnd';
import ServiceCard from './common/ServiceCard';

export default function ServicesList() {
  const { openServices, setOpenServices, cart, setCart } = useServiceContext();

  const [collectedProps, ref] = useDrop(
    () => ({
      accept: ['SERVICE_CARD'],
      canDrop: (item, monitor) => {
        //if item.id is not already in open services
        const alreadyExists = openServices?.find((service) => {
          return service.id === item.id;
        });

        if (alreadyExists) {
          return false;
        } else {
          return true;
        }
      },
      drop: (item, monitor) => {
        handleDrop(item);
      },
    }),
    [cart, openServices]
  );

  const handleDrop = (item) => {
    setOpenServices((prev) => [...prev, item]);
    setCart(cart.filter((service) => service.id !== item.id));
  };

  return (
    <section
      ref={ref}
      className='mt-8 p-2 mx-auto rounded-md flex gap-2 flex-wrap min-h-[400px] bg-slate-100'
    >
      {openServices.map((item) => {
        return (
          <div className='w-[300px]' key={item.id}>
            <ServiceCard data={item} />
          </div>
        );
      })}
    </section>
  );
}
