import { v4 as uuidv4 } from 'uuid';
import { Order } from '../../entities/Order'
import { Product } from '../../entities/Product';
import { calculateProductsListTotalAmount } from '../../utils/calculateProductsListTotalAmount'

interface CreateNewOrderRequest {
	orderProducts: Product[]
	storeId: string
	customerId: string
}

type CreateNewOrderResponse = Order

export class CreateNewOrder {
	async execute(request: CreateNewOrderRequest): Promise<CreateNewOrderResponse> {
		const { orderProducts, storeId, customerId } = request

		const totalAmount = calculateProductsListTotalAmount(orderProducts)

		return new Order({
			id: uuidv4(),
			amount: totalAmount,
			storeId: storeId,
			customerId: customerId,
			products: orderProducts
		})
	}
}