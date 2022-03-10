import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import { Footer } from "src/COmponents/Footer";
import { Header } from "src/COmponents/Header";
import { Profile } from "src/COmponents/Profile";
import { Theme } from "src/COmponents/Theme";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<div className="min-h-screen p-main flex-1 flex-col justify-center items-center ">
				<Profile />
				{/* <Theme />  */}
				<div>
					<p>Project</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
