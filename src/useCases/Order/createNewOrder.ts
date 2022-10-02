import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../entities/Product'
import { Order } from '../../entities/Order'

interface CreateNewOrderRequest {
	orderProducts: Product[]
	storeId: string
	customerId: string
}

type CreateNewOrderResponse = Order

export class CreateNewOrder {
	async execute(request: CreateNewOrderRequest): Promise<CreateNewOrderResponse> {
		const { orderProducts, storeId, customerId } = request

		const totalAmount = orderProducts.reduce((acc, product) => {
			return acc += product.price
		}, 0)

		return new Order({
			id: uuidv4(),
			amount: totalAmount,
			storeId: storeId,
			customerId: customerId,
			products: orderProducts
		})
	}
}