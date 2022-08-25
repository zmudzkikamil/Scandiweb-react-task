import { gql } from '@apollo/client';

export const CURRENCIES = gql`
  query Currencies {
    currencies {
      label
      symbol
    }
  }
`;
