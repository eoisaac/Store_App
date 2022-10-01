import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Ticket } from "../Ticket";

test('create ticket', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: randomId, name: "productA", price: 27.5 })
	const productB = new Product({ id: randomId, name: "productA", price: 10 })

	const ticket = new Ticket({
		id: randomId,
		amount: 37.5,
		products: [productA, productB]
	})

	expect(ticket).toBeInstanceOf(Ticket)
	expect(ticket.id).toEqual(randomId)
	expect(ticket.amount).toEqual(ticket.products.reduce((acc, product) => {
		return acc += product.price
	}, 0))
})

