import React from 'react';
import { FormFiled, OrderProduct } from '../components/';
import ImageCard from '../components/ImageCard';
import { Stack, TextStyle, ResourceList, ResourceItem, Layout, Card } from '@shopify/polaris';
const PrivateLayout = () => {
  const OrderItem = [
    { name: 'Mobile Holder', price: 10, color: 'black', image: 'mobile-holder.jpg', quantity: 1 },
    { name: 'Rado Watch', price: 120, color: 'black', image: 'rado.jpg', quantity: 1 },
    { name: 'C type to MicroConverter', price: 18, color: 'black', image: 'usb-c-2-micro.jpeg', quantity: 1 },
    { name: 'Mobile Case', price: '10', color: 'black', image: 'hard-case.jpg', quantity: 1 },
  ];
  return (
    <Layout>
      <Layout.Section>
        <Card>
          <ImageCard />
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
          <ResourceList
            items={[1]}
            renderItem={(item) => {
              return (
                <ResourceItem sectioned>
                  <Stack alignment='center' distribution='equalSpacing'>
                    <Stack.Item>
                      <div>Sub Total</div>
                      <div>Shipping</div>
                      <div>Taxes</div>
                    </Stack.Item>
                    <Stack.Item>
                      <div>{`$ 230`}</div>
                      <div>{`$ 12`}</div>
                      <div>{`$ 99`}</div>
                    </Stack.Item>
                  </Stack>
                  <hr />
                  <Stack alignment='center' distribution='equalSpacing'>
                    <Stack.Item>
                      <div>Total </div>
                    </Stack.Item>
                    <Stack.Item>
                      <div>{`$ 346`} </div>
                    </Stack.Item>
                  </Stack>
                </ResourceItem>
              );
            }}
          />
        </Card>
      </Layout.Section>
    </Layout>
  );
};

export default PrivateLayout;
