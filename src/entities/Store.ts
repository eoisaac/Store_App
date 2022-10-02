import { Inventory } from "./Inventory"

export interface StoreProps {
	id: string
	name: string
	balance: number
	inventory: Inventory
}

export class Store {
	private props: StoreProps

	constructor(props: StoreProps) {
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

	get inventory() {
		return this.props.inventory
	}

	set inventory(inventory: Inventory) {
		this.props.inventory = inventory
	}
}
