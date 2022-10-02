import { expect, describe, it } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewOrder } from "../createNewOrder";
import { Order } from "../../../entities/Order";
import { Product } from "../../../entities/Product";

describe('create new order', () => {
	const productA = new Product({ id: uuidv4(), name: "productA", price: 57.5 })
	const productB = new Product({ id: uuidv4(), name: "productA", price: 22.87 })
	const productC = new Product({ id: uuidv4(), name: "productA", price: 10 })

	it('should be able to create a new order', () => {
		const createNewOrder = new CreateNewOrder()

		expect(createNewOrder.execute({
			storeId: uuidv4(),
			customerId: uuidv4(),
			orderProducts: [productB, productC]
		})).resolves.toBeInstanceOf(Order)
	})

	it('should be able to calculate products price amount', () => {
		const createNewOrder = new CreateNewOrder()

		expect(createNewOrder.execute({
			storeId: uuidv4(),
			customerId: uuidv4(),
			orderProducts: [productA, productB, productC]
		})).resolves.toMatchObject({ amount: 90.37 })
	})
})