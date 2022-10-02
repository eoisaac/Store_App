import { expect, describe, it } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { CreateOrderTicket } from "../createOrderTicket";
import { Ticket } from "../../../entities/Ticket";
import { Product } from "../../../entities/Product";

describe('create order ticket', () => {
	const productA = new Product({ id: uuidv4(), name: "productA", price: 57.5 })

	it('should be able to create an order ticket', () => {
		const createOrderTicket = new CreateOrderTicket()

		expect(createOrderTicket.execute({
			orderProducts: [productA],
			orderAmount: productA.price
		})).resolves.toBeInstanceOf(Ticket)
	})

})