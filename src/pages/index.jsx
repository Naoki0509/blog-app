import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/COmponents/Footer";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Header } from "src/Components/Header";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className="">aaaa</div>
			</main>
			<Footer />
		</div>
	);
}
