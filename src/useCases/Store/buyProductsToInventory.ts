import { Inventory } from "../../entities/Inventory";
import { Product } from "../../entities/Product";
import { Store } from "../../entities/Store";
import { calculateProductsListTotalAmount } from '../../utils/calculateProductsListTotalAmount'

interface BuyProductsToInventoryRequest {
	newProducts: Product[]
	store: Store
}

type BuyProductsToInventoryResponse = Inventory

export class BuyProductsToInventory {
	async execute(request: BuyProductsToInventoryRequest): Promise<BuyProductsToInventoryResponse> {
		const { newProducts, store } = request

		const totalAmount = calculateProductsListTotalAmount(newProducts)

		const inventory = store.inventory
		inventory.products = [...inventory.products, ...newProducts]
		inventory.amount = inventory.amount + totalAmount

		store.inventory = inventory
		store.balance = store.balance - totalAmount

		return inventory
	}
}