import Head from "next/head";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import styles from "src/styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<title>はじめまして</title>
			</Head>
			<Header />
			<main className={styles.main}>
				<div className="flex items-center justify-center">
					<h1>はじめまして</h1>
					<p></p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
