import { gql } from '@apollo/client';

export const fetchProducts = (category) => {
  const PRODUCTS = gql`
	query Products {
		category(input: { title: "${category}" }) {
			products {
				prices {
					amount
					currency {
						label
						symbol
					}
				}
				id
				gallery
				name
				inStock
				brand
				attributes {
					name
				}
			}
		}
	}
`;
  return PRODUCTS;
};
