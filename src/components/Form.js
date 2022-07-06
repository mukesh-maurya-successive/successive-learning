import React, { useState } from 'react';
import { Card, Stack, Form, FormLayout, Button, TextField } from '@shopify/polaris';

const FormFiled = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    alert('Submitted');
  };

  const handleEmailChange = () => {
    setEmail('successive@hotmail.com');
    console.log(email);
  };
  return (
    <Card className="formField" title='New Card' sectioned>
      <hr />
      <Card.Section>
        <Stack wrap={false} alignment='center' distribution='center'>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              {/* <hr /> */}
              <TextField
                value={email}
                onChange={handleEmailChange}
                type='email'
                autoComplete='email'
                placeholder='Name on Card'
              />
              <TextField
                value={email}
                onChange={handleEmailChange}
                placeholder='XXXX-XXXX-XXXX-XXX'
                type='email'
                autoComplete='email'
              />

              <FormLayout.Group condensed>
                <TextField placeholder='MM/YY' />
                <TextField placeholder='CVV' />
              </FormLayout.Group>
              <Button fullWidth primary submit>
                Submit
              </Button>
              <Card></Card>
            </FormLayout>
          </Form>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default FormFiled;
