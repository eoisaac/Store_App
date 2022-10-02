import { Product } from "../entities/Product";

export const calculateProductsListTotalAmount = (products: Product[]) => {
	return products.reduce((acc, product) => {
		return acc += product.price
	}, 0)
}