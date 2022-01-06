import Head from 'next/head'
import Link from 'next/link'

const Homepage = () => {
  return <div>
	<h1>Newhouse 1 lobby</h1>
	<Link href="/lobby">
		<a>
			Preview
		</a>
	</Link>
	</div>
}
export default Homepage
