import styles from "src/styles/Home.module.css";
import Image from "next/image";
import ProfilePicture from "src/public/132046306626613212998.jpeg";
import { IoMdPin } from "react-icons/io";

export function Profile() {
	return (
		<div className="flex justify-center items-center">
			<div className=" py-12 px-24 shadow-xl border-2 border-gray-200">
				<h1 className="text-center font-serif font-bold text-4xl pb-12">
					Profile
				</h1>
				<div className="pb-10 flex items-center justify-center">
					<Image
						src={ProfilePicture}
						alt="Profile"
						layout="intrinsic"
						width={150}
						height={150}
						className="rounded-full"
					/>
				</div>
				<div className="text-center font-serif font-bold space-y-4">
					<h1>Naok Hayashida</h1>
					<p>Web Devropper</p>
					<p>Yokohama,Japan</p>
				</div>
			</div>
		</div>
	);
}
