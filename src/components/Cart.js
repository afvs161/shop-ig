export default function Cart(props) {
  const { quantity = 0, toggleModal } = props
  
  return (
		<div className='myCart blue darken-2 white-text' onClick={() => toggleModal()}>
			<div className='material-icons'>add_shopping_cart</div>
			{quantity ? <span>{quantity}</span> : null}
		</div>
	)
}