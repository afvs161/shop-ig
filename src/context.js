import { createContext, useReducer } from 'react'
import reducer from './reducer'

export const ShopContext = createContext()

const initialState = {
	goods: [],
	loading: true,
	order: [],
	cartModal: false,
}

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState)

	value.addOrder = (item) => {
		dispatch({ type: 'add_order', payload: item })
	}

	value.incOrder = (id) => {
		dispatch({ type: 'inc_order', payload: { id: id } })
	}

	value.decOrder = (id) => {
		dispatch({ type: 'dec_order', payload: { id: id } })
	}

	value.toggleModal = () => {
		dispatch({ type: 'toggle_modal' })
	}

	value.removeItem = (id) => {
		dispatch({ type: 'remove_item', payload: { id: id } })
	}

	value.setGoods = (data) => {
		dispatch({ type: 'set_goods', payload: data })
	}

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
