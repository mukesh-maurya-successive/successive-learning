import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Button, Card, Layout, Link } from '@shopify/polaris';
import { AccountConnectionExample, Checkout } from './components';
import PrivateLayout from './Layout/PrivateLayout';

const App = () => {
  return (
    <div>
      <AppProvider i18n={enTranslations}>
        <Card title="Checkout">
          <Card.Section>
          <Link url='https://help.shopify.com/manual'>  Shipping / Payment Method / Confirmation/</Link>
          </Card.Section>
        </Card>
        <hr />
        <div>
          <PrivateLayout />
        </div>
      </AppProvider>
    </div>
  );
};
export default App;
