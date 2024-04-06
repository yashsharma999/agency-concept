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

export default function LeadEmail({ cart }) {
  return (
    <Html>
      <Head />
      <Preview>{'Thank you for expressing interest in our services.'}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            <Heading className='text-center'>Next Steps</Heading>
            <Text>
              Thank you for expressing interest in our services. We appreciate
              the opportunity to potentially collaborate with you.
            </Text>
            <Text>
              Our dedicated team will promptly review your inquiry and will
              reach out to you within the next <strong>24 hours</strong> to
              gather more detailed information about your specific requirements.
              <br />
              <br />
              Upon successful agreement, we are committed to providing you with
              a personalized <strong>Trello board</strong>. This platform will
              enable you to efficiently monitor the progress of our work,
              address any concerns, and provide valuable feedback.
              <br />
              <br /> We look forward to the possibility of working together and
              ensuring a seamless collaboration.
              <br />
              <br />
              Best Regards,
              <br /> Yash Sharma
            </Text>

            {cart?.length > 0 && (
              <>
                <Hr />
                <Section className=''>
                  <Row className='mb-2'>
                    <Column className='font-bold'>{'Service'}</Column>
                    <Column className='text-right font-bold'>
                      {'Price Range'}
                    </Column>
                  </Row>
                  {cart?.map((item, i) => (
                    <Row key={i} className='mb-2'>
                      <Column key={i} className={'text-sm'}>
                        {item.name}
                      </Column>
                      <Column
                        className='text-right text-sm'
                        key={i}
                      >{`${item.price}`}</Column>
                    </Row>
                  ))}
                </Section>
              </>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
