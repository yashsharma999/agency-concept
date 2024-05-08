import React from 'react';
import {
  Html,
  Button,
  Container,
  Head,
  Preview,
  Tailwind,
  Body,
  Section,
  Text,
  Heading,
  Row,
  Column,
  Hr,
} from '@react-email/components';

export default function ContactEmail({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>{'New Lead!'}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            <Heading className='text-center'>Next Steps</Heading>
            <Text>New Lead Info.</Text>

            {
              <>
                <Hr />
                <Section className=''>
                  <Row className='mb-2'>
                    <Column className='font-bold'>{'Name'}</Column>
                    <Column className='text-right font-bold'>{name}</Column>
                  </Row>
                  <Row className='mb-2'>
                    <Column className='font-bold'>{'Email'}</Column>
                    <Column className='text-right font-bold'>{email}</Column>
                  </Row>
                  <Row className='mb-2'>
                    <Column className='font-bold'>{'Message'}</Column>
                    <Column className='text-right font-bold'>{message}</Column>
                  </Row>
                </Section>
              </>
            }
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
