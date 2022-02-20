import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Image from "next/image";
import { Header } from "src/COmponents/Header";
import { Footer } from "src/COmponents/Footer";
import { Profile } from "src/COmponents/Profile";
import { Skill } from "src/COmponents/Skill";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

export default function Home() {
	return (
		<div className="p-container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="flex-col flex-1 p-main min-h-screen justify-center items-center">
				<Profile />
				<Skill />
				<Footer />
			</div>
		</div>
	);
}
