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
				<ul>
					{blog.map((blog) => (
						<li key={blog.id}>
							<Link href={`/blog/${blog.id}`}>
								<a>
									<div className="grid flex-col shadow-lg bg-red-400">
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
