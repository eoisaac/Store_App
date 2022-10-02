import { expect, describe, it } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../../entities/Product";
import { calculateProductsListTotalAmount } from "../calculateProductsListTotalAmount";

describe('create new order', () => {

	const productA = new Product({ id: uuidv4(), name: "productA", price: 57.5 })
	const productB = new Product({ id: uuidv4(), name: "productA", price: 22.87 })
	const productC = new Product({ id: uuidv4(), name: "productA", price: 10 })

	it('should be able to calculate products list total amount', () => {
		const productsList = [productA, productB, productC]
		const productsListTotalAmount = calculateProductsListTotalAmount(productsList)

		expect(productsListTotalAmount).toEqual(90.37)
	})
})