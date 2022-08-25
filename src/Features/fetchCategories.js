import { gql } from "@apollo/client";

export const CATEGORY_NAMES = gql`
  query CategoryNames {
    categories {
      name
    }
  }
`;
