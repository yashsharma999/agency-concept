'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Navigation from '@/components/Navigation';
import { homeNavMenu } from '@/constants';

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

export default function ContactUsPage() {
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

  return (
    <div className='max-w-[1200px] mx-auto pb-4  '>
      <Navigation menu={homeNavMenu} />
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(submit)}
          onSubmit={form.handleSubmit(submit)}
          className='!mt-[30px] space-y-4 max-w-3xl mx-auto'
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
                  <Textarea {...field} placeholder='Type your message here.' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>Save changes</Button>
        </form>
      </Form>
    </div>
  );
}
