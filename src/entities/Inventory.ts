import { Product } from "./Product"

export interface InventoryProps {
	id: string
	amount: number
	products: Product[]
}

export class Inventory {
	private props: InventoryProps

	constructor(props: InventoryProps) {
		this.props = props
	}

	get id() {
		return this.props.id
	}

	get amount() {
		return this.props.amount
	}

	set amount(amount: number) {
		this.props.amount = amount
	}

	get products() {
		return this.props.products
	}

	set products(products: Product[]) {
		this.props.products = products
	}
}
