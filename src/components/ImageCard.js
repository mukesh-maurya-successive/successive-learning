import React from 'react';
import { Card, ResourceList, ResourceItem, Stack } from '@shopify/polaris';

const ImageCard = () => {
  return (
    <Card title='Wallet' sectioned>
      <hr />
      <br />
      <ResourceList
        items={[1]}
        renderItem={() => {
          return (
            <div>
              <ResourceItem sectioned>
                <Stack wrap={true} alignment='center' distribution='equalSpacing' spacing='extraLoose'>
                  <Stack.Item>
                    <img alt='' width='200px' height='150px' src='./images/cards/discover.png' />
                  </Stack.Item>
                  <Stack.Item>
                    <img alt='' width='200px' height='150px' src='./images/cards/mastercard.png' />
                  </Stack.Item>
                  <Stack.Item>
                    <img alt='' width='200px' height='150px' src='./images/cards/visa.png' />
                  </Stack.Item>
                </Stack>
              </ResourceItem>
            </div>
          );
        }}
      />
    </Card>
  );
};

export default ImageCard;
