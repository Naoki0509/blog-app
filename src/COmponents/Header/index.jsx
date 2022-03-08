import Link from "next/link";

export const Header = () => {
	return (
		<div className="flex fixed items-center justify-start pt-4">
			<div className="text-4xl font-serif font-bold">N Blog</div>
			<div className="ml-12">
				<ul className="flex justify-start space-x-6 font-bold font-serif text-2xl">
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
