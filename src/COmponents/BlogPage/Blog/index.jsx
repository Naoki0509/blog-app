import styles from "src/styles/Home.module.css";
import Image from "next/image";
import ProfilePicture from "src/public/132046306626613212998.jpeg";

export function Blog() {
	return (
		<main className={styles.main}>
			<div className="lg:w-1/2 p-12 shadow-xl border-2 border-gray-200">
				<div className="pb-10 flex items-center justify-center">
					<Image
						src={ProfilePicture}
						alt="Profile"
						layout="fixed"
						width="150px"
						height="150px"
						className="rounded-full"
					/>
				</div>
				<div className="text-left texxt-xl text-gray-500">
					<p>はじめまして。Naokiです。</p>
					<p>私は現在、フロントエンドエンジニアを目指しています。</p>
					<p>さて、僕はこのブログを通して、このブログを見てくださった方に、</p>
					<p>
						次の日により良くなるように日々のアドバイスのようなものを発信していけたらなと思っていますが、
					</p>
					<p>
						まぁ日々感じた疑問だったり、思い描いたことをここに綴っていけたらなと思うのでどうぞよろしくお願いいたします。
					</p>
				</div>
			</div>
			<div className="flex-cokl items-center justify-center">
				<div className="p-12">1.はじめまして</div>
				<div className="p-12">1.はじめまして</div>
				<div className="p-12">1.はじめまして</div>
				<div className="p-12">1.はじめまして</div>
			</div>
		</main>
	);
}
