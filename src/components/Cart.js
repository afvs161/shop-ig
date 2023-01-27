import { useContext } from 'react'
import { ShopContext } from '../context'

export default function Cart() {
	const { order, toggleModal = Function.prototype } = useContext(ShopContext)
	const quantity = order.length

	return (
		<div
			className='myCart blue darken-2 white-text'
			onClick={() => toggleModal()}
		>
			<div className='material-icons'>add_shopping_cart</div>
			{quantity ? <span>{quantity}</span> : null}
		</div>
	)
}
