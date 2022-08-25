import { gql } from '@apollo/client';

export const fetchProduct = (id) => {
  const PRODUCT_BY_ID = gql`
		query ProductById {
			product(id: "${id}") {
				name
				inStock
				gallery
				description
				category
				attributes {
					name
					id
					type
					items {
						displayValue
						value
						id
					}
				}
				prices {
					currency {
						label
						symbol
					}
					amount
				}
				brand
			}
		}
	`;
  return PRODUCT_BY_ID;
};
