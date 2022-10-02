import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"
import { Ticket } from "../Ticket";
import { calculateProductsListTotalAmount } from "../../utils/calculateProductsListTotalAmount";

test('create ticket', () => {
	const randomId = uuidv4()

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const ticket = new Ticket({
		id: randomId,
		amount: 160,
		products: [productA, productB]
	})

	expect(ticket).toBeInstanceOf(Ticket)
	expect(ticket.id).toEqual(randomId)
	expect(ticket.amount).toEqual(calculateProductsListTotalAmount(ticket.products))
})

