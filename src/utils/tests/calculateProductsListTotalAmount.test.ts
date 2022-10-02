import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../../entities/Product";
import { calculateProductsListTotalAmount } from "../calculateProductsListTotalAmount";

test('calculate products list total amount', () => {
	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })
	const productC = new Product({ id: uuidv4(), name: "productC", price: 10, amount: 4 })

	const productsList = [productA, productB, productC]
	const productsListTotalAmount = calculateProductsListTotalAmount(productsList)

	expect(productsListTotalAmount).toEqual(200)
})