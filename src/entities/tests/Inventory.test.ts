import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Inventory } from "../Inventory";

test('create inventory', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const inventory = new Inventory({
		id: randomId,
		amount: 70,
		products: [productA, productB]
	})

	expect(inventory).toBeInstanceOf(Inventory)
	expect(inventory.id).toEqual(randomId)
	expect(inventory.amount).toEqual(inventory.products.reduce((acc, product) => {
		return acc += product.price
	}, 0))
})

