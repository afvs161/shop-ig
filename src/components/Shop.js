import { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import Cart from './Cart'
import CartModal from './CartModal'
import GoodList from './GoodList'
import Loader from './Loader'
import { toast } from 'react-toastify'

export default function Shop(props) {
	const [goods, setGoods] = useState([])
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [cartModal, setCartModal] = useState(false)

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then(response => response.json())
			.then(data => {
				data.featured && setGoods(data.featured)
				setLoading(false)
			})
	}, [])

	function addOrder(item) {
		// @ts-ignore
		let ifExist = order.findIndex(orderItem => orderItem.id === item.id)
		if (ifExist < 0) {
			let newOrder = {
				...item,
				quantity: 1,
			}
			setOrder([...order, newOrder])
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === ifExist) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					}
				} else {
					return orderItem
				}
			})

			setOrder(newOrder)
		}
		toast.success('Goods was successfully added to basket!')
	}

	function toggleModal() {
		setCartModal(!cartModal)
	}

	if (cartModal) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}

	const removeItem = id => {
		const lefts = order.filter(item => item.id !== id)
		setOrder(lefts)
		toast.error('Good was successfully removed from basket!')
	}

	function incOrder(id) {
		const newOrder = order.map(el => {
			if (el.id === id) {
				const newQuantity = el.quantity + 1
				return {
					...el,
					quantity: newQuantity,
				}
			} else {
				return el
			}
		})
		setOrder(newOrder)
	}

	function decOrder(id) {
		const newOrder = order.map(el => {
			if (el.id === id) {
				const newQuantity = el.quantity - 1
				return {
					...el,
					quantity: newQuantity >= 0 ? newQuantity : 0,
				}
			} else {
				return el
			}
		})
		setOrder(newOrder)
	}

	return (
		<div className={'content container ' + (props.navMargin ? 'mmt' : '')}>
			{cartModal && (
				<CartModal
					order={order}
					toggleModal={toggleModal}
					incOrder={incOrder}
					decOrder={decOrder}
					removeItem={removeItem}
				/>
			)}
			<Cart quantity={order.length} toggleModal={toggleModal} />
			{loading ? <Loader /> : <GoodList goods={goods} addOrder={addOrder} />}
		</div>
	)
}
