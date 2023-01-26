import GoodItem from './GoodItem'

export default function GoodList(props) {
	const { goods = [], addOrder } = props

	if (!goods.length) {
		;<h2>No products found</h2>
	}

	return (
		<div className='goods'>
			{goods.map(item => {
				return <GoodItem key={item.id} {...item} addOrder={addOrder} />
			})}
		</div>
	)
}
