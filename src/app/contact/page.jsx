'use client';
import React, { useState } from 'react';
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
import axios from 'axios';
import { toast } from 'sonner';

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
  const [loading, setLoading] = useState(false);
  let count = localStorage.getItem('contact_count');
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submit = (values) => {
    if (count > 1) {
      return toast('No spam messages!', {
        description: `Please don't spam message`,
      });
    }
    const { name, email, message } = values;
    sendEmail(name, email, message);
    form.reset();
  };

  const sendEmail = async (name, email, message) => {
    try {
      setLoading(true);
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/send`,
        {
          recipientEmail: 'syash5575@gmail.com',
          name,
          email,
          message,
          contact: true,
        }
      );
      if (resp) {
        if (count) {
          localStorage.setItem('contact_count', Number(count) + 1);
        } else {
          localStorage.setItem('contact_count', 1);
        }
        toast('Message sent', {
          description: `Your message has been sent successfully. We'll reach out to you asap.`,
        });
      }
    } catch (error) {
      toast('Some error occured', {
        description: `Unfortunately, some error occured. You can still reach out to us at syash5575@gmail.com`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto pb-4 px-4  '>
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

          <Button disabled={loading} type='submit'>
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
