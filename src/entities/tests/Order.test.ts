import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Order } from "../Order";
import { calculateProductsListTotalAmount } from "../../utils/calculateProductsListTotalAmount";

test('create order', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const order = new Order({
		id: randomId,
		amount: 160,
		storeId: uuidv4(),
		customerId: uuidv4(),
		products: [productA, productB]
	})

	expect(order).toBeInstanceOf(Order)
	expect(order.id).toEqual(randomId)
	expect(order.amount).toEqual(calculateProductsListTotalAmount(order.products))
})

test('cannot create an order without products', () => {
	expect(() => new Order({
		id: uuidv4(),
		amount: 160,
		storeId: uuidv4(),
		customerId: uuidv4(),
		products: []
	})).toThrow(Error)
})