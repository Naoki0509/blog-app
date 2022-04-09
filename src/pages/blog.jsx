import { client } from "libs/client";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";
import { Profile } from "src/COmponents/Profile";

export default function Blog({ blog }) {
	return (
		<div>
			<Head>
				<title>N Blog</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-col flex-1 items-center justify-center">
				<Profile />
				<div className="flex flex-col items-center justify-center py-14">
					<h1 className="text-center font-serif font-bold text-4xl">
						Blog List
					</h1>
					<ul className="grid flex-wrap grid-cols-3">
						{blog.map((blog) => (
							<li key={blog.id}>
								<Link href={`/blog/${blog.id}`}>
									<a>
										<div className="p-6 space-y-6 shadow-lg border-2 border-gray-200">
											<h1 className="font-bold text-2xl">{blog.title}</h1>
											<p>{blog.SabTitle}</p>
										</div>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "blog" });

	return {
		props: {
			blog: data.contents,
		},
	};
};
