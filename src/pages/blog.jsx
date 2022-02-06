import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { useEffect, useCallback, useState } from "react";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";

export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<div>aaaaaa</div>
			</main>

			<Footer />
		</div>
	);
}
