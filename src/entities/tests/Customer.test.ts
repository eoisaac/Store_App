import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Customer } from "../Customer";

test('create customer', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const customer = new Customer({
		id: randomId,
		name: 'John Doe',
		balance: 4535.74,
		products: [productA, productB]
	})

	expect(customer).toBeInstanceOf(Customer)
	expect(customer.id).toEqual(randomId)
	expect(customer.products.length).toEqual(2)
})

