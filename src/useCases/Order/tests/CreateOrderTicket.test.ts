import { expect, describe, it } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { CreateOrderTicket } from "../createOrderTicket";
import { Ticket } from "../../../entities/Ticket";
import { Product } from "../../../entities/Product";

describe('create order ticket', () => {
	const createOrderTicket = new CreateOrderTicket()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 57.5 })
	const productB = new Product({ id: uuidv4(), name: "productA", price: 22.87 })
	const productC = new Product({ id: uuidv4(), name: "productA", price: 10 })

	it('should be able to create an order ticket', () => {
		expect(createOrderTicket.execute({
			orderProducts: [productA],
			orderAmount: productA.price
		})).resolves.toBeInstanceOf(Ticket)
	})

})