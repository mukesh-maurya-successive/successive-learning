import React from 'react';
import { Layout, Card } from '@shopify/polaris';
import { FormFiled, OrderProduct } from '../components/';
import ImageCard from '../components/ImageCard';
import { Stack, TextStyle } from '@shopify/polaris';
const PrivateLayout = () => {
  const OrderItem = [
    { name: 'Mobile Holder', price: 10, color: 'black', image: 'mobile-holder.jpg', quantity: 1 },
    { name: 'Rado Watch', price: 120, color: 'black', image: 'rado.jpg', quantity: 1 },
    { name: 'C type to MicroConverter', price: 18, color: 'black', image: 'usb-micro.jpeg', quantity: 1 },
    { name: 'Mobile Case', price: '10', color: 'black', image: 'hard-case.jpg', quantity: 1 },
  ];
  return (
    <Layout>
      <Layout.Section>
        <ImageCard />
        <Card>
          <FormFiled />
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
        <Card sectioned subdued>
          <Card.Section>
            {OrderItem.map((item) => (
              <div>
                <OrderProduct
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  image={`./images/products/${item.image}`}
                  quantity={item.quantity}
                />
                <hr />
              </div>
            ))}
          </Card.Section>
          <Stack.Item>
            <Card.Section title='Sub Total'>
              <p>Shipping</p>
              <p>Taxes</p>
            </Card.Section>
            <hr />
            <Card.Section
              title='Total'
              actions={[{ content: 'Delete', destructive: true }, { content: 'Continue' }]}
            ></Card.Section>
          </Stack.Item>
        </Card>
      </Layout.Section>
    </Layout>
  );
};

export default PrivateLayout;
