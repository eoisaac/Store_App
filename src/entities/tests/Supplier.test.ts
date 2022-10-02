import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Supplier } from "../Supplier";

test('create supplier', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const supplier = new Supplier({
		id: randomId,
		name: 'Any Supplier',
		balance: 4535.74,
		products: [productA, productB]
	})

	expect(supplier).toBeInstanceOf(Supplier)
	expect(supplier.id).toEqual(randomId)
	expect(supplier.products.length).toEqual(2)
})