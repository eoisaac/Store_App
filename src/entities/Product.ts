export interface ProductProps {
	id: string
	name: string
	price: number
	amount: number
}

export class Product {
  private props: ProductProps

  constructor (props: ProductProps) {
    this.props = props
  }

  get id () {
    return this.props.id
  }

  get name () {
    return this.props.name
  }

  get price () {
    return this.props.price
  }

  get amount () {
    return this.props.amount
  }

}
