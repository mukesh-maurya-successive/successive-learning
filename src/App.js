import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Card, DisplayText, Stack, Icon } from '@shopify/polaris';
import PrivateLayout from './Layout/PrivateLayout';
import { CircleCancelMajor } from '@shopify/polaris-icons';
import './App.css';

const App = () => {
  return (
    <div className="mainLayout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})` }}>
      <AppProvider i18n={enTranslations}>
        <div className='app'>
          <Card>
            <Card.Section>
              <Stack alignment='center' distribution='equalSpacing'>
                <Stack.Item>
                  <div>
                    <DisplayText size='small' element='h6' subdued>
                      <b>Checkout</b> &nbsp;&nbsp; &nbsp;&nbsp; Shipping&nbsp; /<b> Payment Method </b>&nbsp; /
                      Confirmation&nbsp;{' '}
                    </DisplayText>
                  </div>
                </Stack.Item>
                <Stack.Item>
                  <Icon source={CircleCancelMajor} color='base' />
                </Stack.Item>
              </Stack>
            </Card.Section>
          </Card>
          <hr />
          <PrivateLayout />
        </div>
      </AppProvider>
    </div>
  );
};
export default App;
