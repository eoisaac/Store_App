import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../entities/Product'
import { Ticket } from '../../entities/Ticket'

interface CreateOrderTicketRequest {
	orderProducts: Product[]
	orderAmount: number
}

type CreateOrderTicketResponse = Ticket

export class CreateOrderTicket {
	async execute(request: CreateOrderTicketRequest): Promise<CreateOrderTicketResponse> {
		const { orderProducts, orderAmount } = request

		return new Ticket({
			id: uuidv4(),
			amount: orderAmount,
			products: orderProducts
		})
	}
}