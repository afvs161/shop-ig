import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Shop from './components/Shop'
import { ToastContainer } from 'react-toastify'
import { ContextProvider } from './context'

export default function App() {
	const [navMargin, setNavMargin] = useState(false)

	function toggleNavMargin() {
		setNavMargin(!navMargin)
	}

	return (
		<>
		<ToastContainer position='top-right' autoClose={3000} />
			<Header toggleNavMargin={toggleNavMargin} />
			<ContextProvider>
				<Shop navMargin={navMargin} />
			</ContextProvider>
			<Footer />
		</>
	)
}
