import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";
import { Profile } from "src/COmponents/Profile";
import { Skill } from "src/COmponents/Skill";
import { ButtonToggle } from "src/COmponents/DarkMode";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-1 flex-col justify-center items-center ">
				<Profile />
				<Skill />
			</div>
			<Footer />
		</div>
	);
}
