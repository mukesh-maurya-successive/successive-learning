import React, { useState } from 'react';
import { Card, Form, FormLayout, Button, TextField, Checkbox } from '@shopify/polaris';

const FormFiled = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    alert('Submitted');
  };
  const handleNewsLetterChange = () => {
   console.log(email)
  };
  const handleEmailChange = () => {
    setEmail('successive@hotmail.com');
    // alert(email);
    console.log(email)
  };
  return (
    <Card title='New Card' sectioned>
      <Card.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <hr />
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
            </FormLayout>
          </Form>
      </Card.Section>
    </Card>
  );
};

export default FormFiled;
