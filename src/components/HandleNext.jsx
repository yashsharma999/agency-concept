import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import doneIcon from '../assets/done.svg';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useState } from 'react';
import Image from 'next/image';

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default function HandleNext({ cart }) {
  const [state, setState] = useState(0);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const handleCostRange = () => {
    let lowerLimit = 0;
    let upperLimit = 0;

    cart?.forEach((item) => {
      lowerLimit += item.price[0];
      upperLimit += item.price[1];
    });

    return {
      lowerLimit,
      upperLimit,
    };
  };

  const handleLead = (values) => {
    console.log(values);
    setState(1);
  };

  return (
    <div className='bg-white p-4 pb-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[42px]'>💸</h1>
        <h1 className='text-[42px]'>{`${handleCostRange().lowerLimit}-${
          handleCostRange().upperLimit
        }`}</h1>
      </div>
      <Dialog>
        <DialogTrigger className='w-full mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>
          Next
        </DialogTrigger>

        <DialogContent>
          {state === 1 && (
            <h1 className='inline-flex gap-2 items-center'>
              <span>
                <Image src={doneIcon} alt='done' />
              </span>
              Our representative will reach out over email to get further
              details
            </h1>
          )}
          {state === 0 && (
            <>
              <DialogHeader>
                <DialogTitle>Next Steps</DialogTitle>
                <DialogDescription>
                  Please provide your email address. Expect to hear back from us
                  within the next 24 hours via email.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleLead)}
                  className='space-y-8'
                >
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='Email' type='email' {...field} />
                        </FormControl>
                        <FormDescription>
                          Make sure you have access to this email id.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
