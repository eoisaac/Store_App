import { expect, describe, it, beforeEach } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { BuyProductsToInventory } from "../buyProductsToInventory";
import { Product } from "../../../entities/Product";
import { Store } from "../../../entities/Store";
import { Inventory } from "../../../entities/Inventory";

describe('by products to inventory', () => {
	let productA: Product
	let productB: Product
	let productC: Product

	let inventory: Inventory
	let store: Store

	beforeEach(() => {
		productA = new Product({ id: uuidv4(), name: "productA", price: 57.5 })
		productB = new Product({ id: uuidv4(), name: "productA", price: 22.87 })
		productC = new Product({ id: uuidv4(), name: "productA", price: 10 })

		inventory = new Inventory({
			id: uuidv4,
			products: [],
			amount: 0
		})

		store = new Store({
			id: uuidv4(),
			name: 'Any Store',
			balance: 100,
			inventory: inventory
		})
	})

	it('should be able to return Inventory', () => {
		const buyProductsToInventory = new BuyProductsToInventory()

		expect(buyProductsToInventory.execute({
			newProducts: [productB, productC],
			store: store
		})).resolves.toBeInstanceOf(Inventory)
	})

	it('should be add new products to inventory', () => {
		const buyProductsToInventory = new BuyProductsToInventory()
		buyProductsToInventory.execute({
			newProducts: [productA, productB, productC],
			store: store
		})

		const { inventory } = store
		expect(inventory.products).toStrictEqual([productA, productB, productC])
	})

	it('should be discount products price amount of store balance', () => {
		const buyProductsToInventory = new BuyProductsToInventory()
		buyProductsToInventory.execute({
			newProducts: [productA, productB, productC],
			store: store
		})

		const { balance } = store
		expect(Number(balance.toFixed(2))).toEqual(9.63)
	})
})