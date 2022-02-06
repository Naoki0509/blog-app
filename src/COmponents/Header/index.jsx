import Link from "next/link";

export function Header() {
	return (
		<div className="flex items-center justify-start">
			<div className="">N Blog</div>
			<div>
				<ul className="flex justify-start">
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
