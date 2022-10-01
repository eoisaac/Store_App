import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Supplier } from "../Supplier";

test('create supplier', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: randomId, name: "productA", price: 27.5 })
	const productB = new Product({ id: randomId, name: "productA", price: 10 })

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