import { Product } from "../../entities/Product"
import { Store } from "../../entities/Store"
import { Customer } from "../../entities/Customer"
import { calculateProductsListTotalAmount } from '../../utils/calculateProductsListTotalAmount'
import { Ticket } from "../../entities/Ticket"
import { CreateOrderTicket } from "../Order/createOrderTicket"

interface BuyProductsFromStoreInventoryRequest {
	orderProducts: Product[]
	store: Store
	customer: Customer
}

type BuyProductsFromStoreInventoryResponse = Ticket

export class BuyProductsFromStoreInventory {
	async execute(request: BuyProductsFromStoreInventoryRequest): Promise<BuyProductsFromStoreInventoryResponse> {
		const { orderProducts, store, customer } = request

		const orderTotalAmount = calculateProductsListTotalAmount(orderProducts)
		const inventory = store.inventory

		const updatedInventory = inventory.products.map(inventoryProduct => {
			const orderProduct = orderProducts.find(orderProduct =>
				orderProduct.id === inventoryProduct.id
			)

			if (orderProduct) {
				inventoryProduct.amount = inventoryProduct.amount - orderProduct.amount
			}

			return orderProduct || inventoryProduct
		})

		inventory.products = updatedInventory
		inventory.amount = inventory.amount - orderTotalAmount

		store.inventory = inventory
		store.balance = orderTotalAmount

		customer.balance = customer.balance - orderTotalAmount
		customer.products = orderProducts

		const createOrderTicket = new CreateOrderTicket()

		return createOrderTicket.execute({
			orderProducts: orderProducts,
			orderAmount: orderTotalAmount
		})
	}
}