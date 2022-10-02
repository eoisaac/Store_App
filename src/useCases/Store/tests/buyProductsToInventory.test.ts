import { expect, describe, it, beforeEach } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { BuyProductsToInventory } from "../buyProductsToInventory";
import { Product } from "../../../entities/Product";
import { Store } from "../../../entities/Store";
import { Inventory } from "../../../entities/Inventory";

describe('by products to inventory', () => {
	let buyProductsToInventory: BuyProductsToInventory

	let inventory: Inventory
	let store: Store

	const productA = new Product({ id: uuidv4(), name: "productA", price: 50, amount: 2 })
	const productB = new Product({ id: uuidv4(), name: "productB", price: 20, amount: 3 })
	const productC = new Product({ id: uuidv4(), name: "productC", price: 10, amount: 4 })

	beforeEach(() => {
		inventory = new Inventory({
			id: uuidv4,
			products: [],
			amount: 0
		})

		store = new Store({
			id: uuidv4(),
			name: 'Any Store',
			balance: 300,
			inventory: inventory
		})

		buyProductsToInventory = new BuyProductsToInventory()
	})

	it('should be able to return Inventory', () => {
		expect(buyProductsToInventory.execute({
			newProducts: [productB, productC],
			store: store
		})).resolves.toBeInstanceOf(Inventory)
	})

	it('should be add new products to inventory', () => {
		buyProductsToInventory.execute({
			newProducts: [productA, productB, productC],
			store: store
		})

		const { inventory } = store
		expect(inventory.products).toStrictEqual([productA, productB, productC])
	})

	it('should be discount products price amount of store balance', () => {
		buyProductsToInventory.execute({
			newProducts: [productA, productB, productC],
			store: store
		})

		const { balance } = store
		expect(balance).toEqual(100)
	})

	it('should be update inventory balance', () => {
		buyProductsToInventory.execute({
			newProducts: [productA, productB, productC],
			store: store
		})

		const { inventory } = store
		expect(inventory.amount).toEqual(200)
	})
})