import { expect, describe, it, beforeEach } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewOrder } from "../createNewOrder";
import { Order } from "../../../entities/Order";
import { Product } from "../../../entities/Product";

describe('create new order', () => {
	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })
	const productC = new Product({ id: uuidv4(), name: "productC", price: 10, amount: 4 })

	let createNewOrder: CreateNewOrder

	beforeEach(() => {
		createNewOrder = new CreateNewOrder()
	})

	it('should be able to create a new order', () => {
		expect(createNewOrder.execute({
			storeId: uuidv4(),
			customerId: uuidv4(),
			orderProducts: [productB, productC]
		})).resolves.toBeInstanceOf(Order)
	})

	it('should be able to calculate products price amount', () => {
		expect(createNewOrder.execute({
			storeId: uuidv4(),
			customerId: uuidv4(),
			orderProducts: [productA, productB, productC]
		})).resolves.toMatchObject({ amount: 200 })
	})
})