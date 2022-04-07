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
				<title>Create Next App</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-col flex-1 items-center justify-center">
				<Profile />
				<ul className="grid grid-cols-3">
					{blog.map((blog) => (
						<li key={blog.id}>
							<Link href={`/blog/${blog.id}`}>
								<a>
									<div className="shadow-lg border-2 border-gray-200">
										<h1>{blog.title}</h1>
										<p>{blog.SabTitle}</p>
									</div>
								</a>
							</Link>
						</li>
					))}
				</ul>
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
