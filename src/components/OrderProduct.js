import React from 'react';
import { Card, Layout, Avatar, ResourceItem, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';

const OrderProduct = (props) => {
  return (
    <Card subdued>
      <ResourceList
        resourceName={{ singular: 'customer', plural: 'customers' }}
        items={[props]}
        renderItem={(item) => {
          const { image, name, price, color, quantity } = item;
          const media = <Thumbnail source={image} alt='Black choker necklace' size='large' alignment='left' />;
          return (
            <ResourceItem media={media} accessibilityLabel={`View details for ${name}`}>
              <Stack alignment='center' distribution='equalSpacing'>
                <Stack.Item>
                  <h3>
                    <TextStyle variation='strong'>{name}</TextStyle>
                  </h3>
                  <i>{color}</i>
                  <div>{`Quantity ${quantity}`}</div>
                </Stack.Item>
                <Stack.Item>
                  <div>{`$ ${price}`}</div>
                </Stack.Item>
              </Stack>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
};

export default OrderProduct;
