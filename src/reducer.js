import { toast } from 'react-toastify'

export default function reducer(state, { type, payload }) {
	switch (type) {
		case 'add_order': {
			let ifExist = state.order.findIndex(
				orderItem => orderItem.id === payload.id
			)
			let newOrder = null
			if (ifExist < 0) {
				let newItem = {
					...payload,
					quantity: 1,
				}
				newOrder = [...state.order, newItem]
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === ifExist) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						}
					} else {
						return orderItem
					}
				})
			}
			toast.success('Goods was successfully added to basket!', {
				toastId: 'success1',
			})
			return {
				...state,
				order: newOrder,
			}
		}
		case 'inc_order': {
			return {
				...state,
				order: state.order.map(el => {
					if (el.id === payload.id) {
						const newQuantity = el.quantity + 1
						return {
							...el,
							quantity: newQuantity,
						}
					} else {
						return el
					}
				}),
			}
		}
		case 'dec_order': {
			return {
				...state,
				order: state.order.map(el => {
					if (el.id === payload.id) {
						const newQuantity = el.quantity - 1
						return {
							...el,
							quantity: newQuantity >= 0 ? newQuantity : 0,
						}
					} else {
						return el
					}
				}),
			}
		}
		case 'toggle_modal': {
			return {
				...state,
				cartModal: !state.cartModal,
			}
		}
		case 'remove_item': {
			toast.error('Good was successfully removed from basket!', {
				toastId: 'success2',
			})
			return {
				...state,
				order: state.order.filter(item => item.id !== payload.id),
			}
		}
		case 'set_goods': {
			return {
				...state,
				goods: payload || [],
				loading: false,
			}
		}
		default:
			return state
	}
}
