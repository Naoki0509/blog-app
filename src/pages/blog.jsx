import Head from "next/head";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";
import { Profile } from "src/COmponents/Profile";
import { Theme } from "src/COmponents/Theme";

export default function Blog() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-col flex-1 items-center justify-center">
				<Profile />
				<div></div>
				{/* <Theme /> */}
			</div>
			<Footer />
		</div>
	);
}
