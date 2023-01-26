import { useState } from 'react'

export default function Header(props) {
	const [toggleNav, setToggleNav] = useState(false)

	function toggleNavButton() {
		setToggleNav(!toggleNav)
		props.toggleNavMargin()
	}

	return (
		<nav>
			<div className='logo'>
				<a href='#'>Online Shop</a>
				<a href='#'>
					<span className='nav-toggle' onClick={toggleNavButton}>
						=
					</span>
				</a>
			</div>
			<ul className={'links ' + (toggleNav ? 'show-links' : '')}>
				<li>
					<a href='#'>REPO</a>
				</li>
			</ul>
		</nav>
	)
}
