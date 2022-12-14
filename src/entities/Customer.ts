import { Product } from "./Product"

export interface CustomerProps {
	id: string
	name: string
	balance: number
	products: Product[]
}

export class Customer {
	private props: CustomerProps

	constructor(props: CustomerProps) {
		this.props = props
	}

	get id() {
		return this.props.id
	}

	get name() {
		return this.props.name
	}

	get balance() {
		return this.props.balance
	}

	set balance(balance: number) {
		this.props.balance = balance
	}

	get products() {
		return this.props.products
	}

	set products(products: Product[]) {
		this.props.products = products
	}
}
