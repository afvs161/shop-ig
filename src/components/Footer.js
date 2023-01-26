export default function Footer() {
	return (
		<footer className='page-footer my-footer'>
			<div className='footer-copyright white'>
				<div className='grey-text text-darken-4 container'>
					© {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-darken-4 right' href='#!'>
						REPO
					</a>
				</div>
			</div>
		</footer>
	)
}
