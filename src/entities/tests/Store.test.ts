import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Inventory } from "../Inventory";
import { Store } from "../Store"
import { Product } from "../Product";

test('create store', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const inventory = new Inventory({
		id: uuidv4(),
		amount: 37.5,
		products: [productA, productB]
	})

	const store = new Store({
		id: randomId,
		name: 'Any Store',
		balance: 4535.74,
		inventory: inventory
	})

	expect(store).toBeInstanceOf(Store)
	expect(store.id).toEqual(randomId)
})