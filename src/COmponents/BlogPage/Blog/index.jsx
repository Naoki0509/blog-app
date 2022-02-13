import styles from "src/styles/Home.module.css";

export function Blog() {
	return (
		<main className={styles.main}>
			<div className="text-5xl font-bold font-serif">Blog</div>
			<div className="text-left texxt-2xl text-gray-500">
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
		</main>
	);
}
