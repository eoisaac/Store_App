import { Product } from "./Product"

export interface OrderProps {
	id: string
	amount: number
	storeId: string
	customerId: string
	products: Product[]
}

export class Order {
	private props: OrderProps

	constructor(props: OrderProps) {
		const { products } = props

		if (products.length === 0) {
			throw new Error('The order must contain at least one product')
		}

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

	get storeId() {
		return this.props.storeId
	}

	get customerId() {
		return this.props.customerId
	}
}
