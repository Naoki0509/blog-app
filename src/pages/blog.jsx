import Head from "next/head";
import { BlogList } from "src/COmponents/BlogList";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";
import { Profile } from "src/COmponents/Profile";

export default function Blog() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-col flex-1 items-center justify-center">
				<Profile />
				<BlogList />
			</div>
			<Footer />
		</div>
	);
}
