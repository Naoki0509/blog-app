import { client } from "libs/client";
import Head from "next/head";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";

export default function BlogId({ blog }) {
	return (
		<div>
			<Head>
				<title>{blog.title}</title>
			</Head>
			<Header />
			<main className="min-h-screen p-main flex-col flex-1 items-center justify-center">
				<h1>{blog.title}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: `${blog.body}`,
					}}
				/>
			</main>
			<Footer />
		</div>
	);
}

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "blog" });

	const paths = data.contents.map((content) => `/blog/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "blog", contentId: id });

	return {
		props: {
			blog: data,
		},
	};
};
