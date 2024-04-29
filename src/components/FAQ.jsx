import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SubMenu from './common/SubMenu';

export function FAQ() {
  return (
    <section className='flex py-[100px] px-4 text-center flex-col items-center'>
      <SubMenu label={'FAQs'} />
      <p className='md:text-[18px] lg:text-[20px] font-light relative'>
        {/* <span className='absolute translate-y-[-50%] opacity-10 blur-xl  bg-[#40a9ff] h-[300px] rounded-full w-[300px]'></span> */}
      </p>
      <Accordion
        type='single'
        collapsible
        className='w-full md:w-[60%] px-4 text-left mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-left'>
            What problem are you trying to solve?
          </AccordionTrigger>
          <AccordionContent>
            {`We just want to make our processes more transparent. Our clients can
            chose our services at fixed price cap, add reviews and give ratings.
            Just like ordering a product from Amazon.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-left'>
            Do i have to pay upfront?
          </AccordionTrigger>
          <AccordionContent>
            {`No. The whole concept of creating an order is just to give you an
            estimate for the cost of our services and keeping track of the
            various projects. The payments are required only after the initial
            milestone is reached and final project completion.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-left'>
            {`How do you ensure that you'll get things done?`}
          </AccordionTrigger>
          <AccordionContent>
            {`We are a young team of talented people from a wide spectrum of
            professional backgrounds looking for working on new projects no
            matter big or small. On a succesfull agreement after the discovery
            call, a dedicated Project manager will be assigned. Apart from this
            you can give ratings and reviews directly on the app making it more
            important for us to give the best possible results.`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
