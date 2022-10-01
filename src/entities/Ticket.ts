import { Product } from "./Product"

export interface TicketProps {
	id: string
	amount: number
	products: Product[]
}

export class Ticket {
	private props: TicketProps

	constructor(props: TicketProps) {
		this.props = props
	}

	get id() {
		return this.props.id
	}

	get amount() {
		return this.props.amount
	}

	get products() {
		return this.props.products
	}
}
