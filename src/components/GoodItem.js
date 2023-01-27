import { useContext } from 'react'
import { ShopContext } from '../context'

export default function GoodItem(props) {
	const { id, name, description, price, full_background } = props
	const {addOrder} = useContext(ShopContext)

	return (
		<div className='card' id={id}>
			<div className='card-image'>
				<img src={full_background} alt="product" />
			</div>
			<div className='card-content'>
				<span className='card-title'>{name}</span>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button className='btn' onClick={() => addOrder({id, name, price, full_background})}>
					Buy
				</button>
				<h5 className='right'>${price}</h5>
			</div>
		</div>
	)
}
