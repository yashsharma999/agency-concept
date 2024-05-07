'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const schema = yup
  .object({
    name: yup.string().max(30, 'Max 30 characters').required(),
    email: yup.string().email().required(),
    message: yup
      .string()
      .min(20, 'Mininum 20 letters')
      .max(100, 'Exceeded 100 letters. Please keep it short')
      .required(),
  })
  .required();

export default function ContactUsSheet() {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submit = (values) => {
    alert('vale', values);
    form.reset();
  };

  const stopPropagate = (callback) => {
    return (e) => {
      e.stopPropagation();
      callback(e);
    };
  };

  return (
    <Sheet>
      <SheetTrigger className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
        Contact Us
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{"Let's Talk!"}</SheetTitle>
          <SheetDescription>
            {`Getting in touch is easy. Simply fill out the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority!`}
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            //onSubmit={form.handleSubmit(submit)}
            onSubmit={form.handleSubmit(submit)}
            className='!mt-[30px] space-y-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email' type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='Type your message here.'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
