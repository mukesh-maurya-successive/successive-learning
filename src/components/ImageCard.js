import React from 'react';
import { Card, Layout} from '@shopify/polaris';

const ImageCard = () => {
  return (
    <div className='imageCard'>
      <Layout>
        <Layout.Section>
          <Card title='Wallet' alignment='center' distribution='equalSpacing' sectioned>
            <hr />
            <Card.Section>
              <img
                alt=''
                width='25%'
                height='35%'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src='./images/cards/discover.png'
              />{' '}
              &nbsp;&nbsp;&nbsp;
              <img
                alt=''
                width='25%'
                height='35%'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src='./images/cards/mastercard.png'
              />
              &nbsp;&nbsp;&nbsp;
              <img
                alt=''
                width='25%'
                height='35%'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src='./images/cards/visa.png'
              />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
};

export default ImageCard;
