export default function CartItem({
	id,
	name,
	price,
	quantity,
	full_background,
	removeItem,
	incOrder,
	decOrder,
}) {
	return (
		<li className='collection-item valign-wrapper orderItem'>
			<div className='valign-wrapper'>
				<img src={full_background} alt='product' className='cartImg' />
				<h6>
					{name} x{quantity} = ${quantity * price}
				</h6>
			</div>
			<div className='secondary-content hide-modal'>
				<button className='btn'>
					<i className='material-icons' onClick={() => decOrder(id)}>
						remove
					</i>
				</button>
				<button className='btn'>
					<i className='material-icons' onClick={() => incOrder(id)}>
						add
					</i>
				</button>
				<button className='btn'>
					<i className='material-icons' onClick={() => removeItem(id)}>
						delete_forever
					</i>
				</button>
			</div>
		</li>
	)
}
