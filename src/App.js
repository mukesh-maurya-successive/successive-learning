import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Card, Link } from '@shopify/polaris';
import PrivateLayout from './Layout/PrivateLayout';
import './App.css';

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})` }}>
      <AppProvider i18n={enTranslations}>
        <div className='app'>
        <Card title='Checkout'>
          <Card.Section>
            <Link url='https://help.shopify.com/manual'> Shipping / Payment Method / Confirmation/</Link>
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
