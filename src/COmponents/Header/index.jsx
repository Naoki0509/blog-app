import Link from "next/link";

export function Header() {
	return (
		<div className="flex items-center justify-start mt-6">
			<div className="text-4xl font-serif font-bold">N Blog</div>
			<div className="ml-8">
				<ul className="flex justify-start space-x-6 font-bold font-serif text-2xl">
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
