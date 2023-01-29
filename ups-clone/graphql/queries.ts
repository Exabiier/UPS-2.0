import { gql, useQuery } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      value {
        email
        name
      }
      name
    }
  }
`;

export const GET_ORDERS = gql`
  query MyQuery   {
    getOrders {
      name
      value {
        Address
        City
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        Lat
        trackingItems {
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
          customer {
            email
            name
          }
        }
      }
    }
  }
`;