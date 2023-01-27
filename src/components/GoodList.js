import { useContext } from 'react'
import { ShopContext } from '../context'
import GoodItem from './GoodItem'

export default function GoodList(props) {
	const { goods = [] } = useContext(ShopContext)

	if (!goods.length) {
		;<h2>No products found</h2>
	}

	return (
		<div className='goods'>
			{goods.map(item => {
				return <GoodItem key={item.id} {...item} />
			})}
		</div>
	)
}
