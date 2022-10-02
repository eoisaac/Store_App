import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Order } from "../Order";

test('create order', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: randomId, name: "productA", price: 27.5 })
	const productB = new Product({ id: randomId, name: "productA", price: 10 })

	const order = new Order({
		id: randomId,
		amount: 37.5,
		storeId: uuidv4(),
		customerId: uuidv4(),
		products: [productA, productB]
	})

	expect(order).toBeInstanceOf(Order)
	expect(order.id).toEqual(randomId)
	expect(order.amount).toEqual(order.products.reduce((acc, product) => {
		return acc += product.price
	}, 0))
})

test('cannot create an order without products', () => {
	expect(() => new Order({
		id: uuidv4(),
		amount: 37.5,
		storeId: uuidv4(),
		customerId: uuidv4(),
		products: []
	})).toThrow(Error)
})