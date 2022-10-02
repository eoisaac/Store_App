import { expect, describe, it, beforeEach } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { BuyProductsFromStoreInventory } from "../BuyProductsFromStoreInventory";
import { Product } from "../../../entities/Product";
import { Customer } from "../../../entities/Customer";
import { Store } from "../../../entities/Store";
import { Inventory } from "../../../entities/Inventory";
import { Ticket } from "../../../entities/Ticket";

describe('buy products from store inventory', () => {
	let buyProductsFromStoreInventory: BuyProductsFromStoreInventory
	let customer: Customer
	let inventory: Inventory
	let store: Store

	const inventoryProductA =
		new Product({ id: uuidv4(), name: "productA", price: 50, amount: 4 })
	const inventoryProductB =
		new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })

	const customerProductA =
		new Product({ id: inventoryProductA.id, name: "productA", price: 50, amount: 2 })

	beforeEach(() => {
		customer = new Customer({
			id: uuidv4(),
			name: 'John Doe',
			balance: 120,
			products: [],
		})

		inventory = new Inventory({
			id: uuidv4(),
			products: [inventoryProductA, inventoryProductB],
			amount: 260
		})

		store = new Store({
			id: uuidv4(),
			name: 'Any Store',
			balance: 0,
			inventory: inventory
		})

		buyProductsFromStoreInventory = new BuyProductsFromStoreInventory()
	})

	it('should be able to add order products in customer and update their balance', () => {
		buyProductsFromStoreInventory.execute({
			store: store,
			customer: customer,
			orderProducts: [customerProductA]
		})

		expect(customer.products).toStrictEqual([customerProductA])
		expect(customer.balance).toEqual(20)
	})

	it('should be able to remove products from store inventory and update it balance', () => {
		buyProductsFromStoreInventory.execute({
			store: store,
			customer: customer,
			orderProducts: [customerProductA]
		})

		const { balance, inventory } = store
		const product = inventory.products.find(product => product.name === 'productA')
		expect(balance).toEqual(100)
		expect(product?.amount).toEqual(2)
	})

	it('should be able to return order Ticket', () => {
		expect(buyProductsFromStoreInventory.execute({
			store: store,
			customer: customer,
			orderProducts: [customerProductA]
		})).resolves.toBeInstanceOf(Ticket)
	})
})