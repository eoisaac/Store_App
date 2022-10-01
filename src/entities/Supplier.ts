import { Product } from "./Product"

export interface SupplierProps {
	id: string
	name: string
	balance: number
	products: Product[]
}

export class Supplier {
	private props: SupplierProps

	constructor(props: SupplierProps) {
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

	get products() {
		return this.props.products
	}
}
