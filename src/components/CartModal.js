import { useContext } from 'react'
import { ShopContext } from '../context'
import CartItem from './CartItem'

export default function CartModal() {
	const { order = [], toggleModal = Function.prototype } = useContext(ShopContext)

	let totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return (
		<div className='cartModalWrapper'>
			<div className='cartModal'>
				<ul className='collection'>
					<li className='collection-item active fixed'>
						Basket
						<i
							className='material-icons right'
							style={{ cursor: 'pointer' }}
							onClick={toggleModal}
						>
							close
						</i>
					</li>
					{order.length ? (
						order.map(item => {
							return <CartItem key={item.id} {...item} />
						})
					) : (
						<li className='collection-item'>Basket is empty</li>
					)}
					<li className='collection-item active'>
						Total price: ${`${totalPrice}`.replace(/(?=(?:.{3})*$)/g, ' ')}
					</li>
				</ul>
			</div>
		</div>
	)
}
