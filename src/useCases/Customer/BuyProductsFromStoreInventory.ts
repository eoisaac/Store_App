import { Inventory } from "../../entities/Inventory"
import { Product } from "../../entities/Product"
import { Store } from "../../entities/Store"
import { calculateProductsListTotalAmount } from '../../utils/calculateProductsListTotalAmount'

interface BuyProductsFromStoreInventoryRequest {
	orderProducts: Product[]
	store: Store
}

type BuyProductsFromStoreInventoryResponse = Inventory

export class BuyProductsFromStoreInventory {
	async execute(request: BuyProductsFromStoreInventoryRequest): Promise<BuyProductsFromStoreInventoryResponse> {
		const { orderProducts, store } = request

		const totalAmount = calculateProductsListTotalAmount(orderProducts)

		const inventory = store.inventory


		orderProducts.forEach(orderProduct => {

		})

		return inventory
	}
}