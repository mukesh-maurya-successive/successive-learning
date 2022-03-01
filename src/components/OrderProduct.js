import React from 'react';
import { Layout, ResourceList, Card, Stack, TextStyle, Thumbnail, ResourceItem } from '@shopify/polaris';

const OrderProduct = (props) => {
  const { image, name, price, color, quantity } = props;
  return (
    <div>
      <Stack alignment='center' distribution='equalSpacing'>
        <Stack.Item>
          <Card subdued>
            <Thumbnail source={image} alt='Black choker necklace' size='large' alignment='left' />
          </Card>
        </Stack.Item>
        <Stack.Item>
          <Card.Section title={name} alignment='left' subdued>
            <p>{color}</p>
            <p>{quantity}</p>
          </Card.Section>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation='strong'>
            <Card.Section subdued>
              <p>{`$ ${price}`}</p>
            </Card.Section>
          </TextStyle>
        </Stack.Item>
      </Stack>
    </div>
  );
};

export default OrderProduct;
