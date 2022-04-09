import Link from "next/link";

export const Header = () => {
	return (
		<div className="flex lg:justify-start justify-center items-center py-2 pl-2 border-b-2 border-gray-300 shadow-md">
			<p className="text-2xl font-serif font-bold">N Blog</p>
			<div className="lg:ml-12">
				<ul className="lg:flex hidden justify-start space-x-6 font-bold font-serif text-2xl">
					<li>
						<Link href="/">
							<a className="hover:text-blue-400">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a className="hover:text-blue-400">Blog</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
