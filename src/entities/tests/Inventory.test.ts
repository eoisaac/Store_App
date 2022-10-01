import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Inventory } from "../Inventory";

test('create inventory', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: randomId, name: "productA", price: 27.5 })
	const productB = new Product({ id: randomId, name: "productA", price: 10 })

	const inventory = new Inventory({
		id: randomId,
		amount: 37.5,
		products: [productA, productB]
	})

	expect(inventory).toBeInstanceOf(Inventory)
	expect(inventory.id).toEqual(randomId)
	expect(inventory.amount).toEqual(inventory.products.reduce((acc, product) => {
		return acc += product.price
	}, 0))
})

