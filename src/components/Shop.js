import { useContext, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import Cart from './Cart'
import CartModal from './CartModal'
import Loader from './Loader'
import GoodList from './GoodList'
import { ShopContext } from '../context'

export default function Shop(props) {
	const { goods, setGoods, loading, order, cartModal } = useContext(ShopContext)

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then(response => response.json())
			.then(data => {
				setGoods(data.featured)
			})
	}, [])

	if (cartModal) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}

	return (
		<div className={'content container ' + (props.navMargin ? 'mmt' : '')}>
			{cartModal && <CartModal />}
			<Cart />
			{loading ? <Loader /> : <GoodList />}
		</div>
	)
}
