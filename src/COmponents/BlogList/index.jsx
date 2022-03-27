import Link from "next/link";

const BlogTitle = [
	{ id: "1", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "2", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "3", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "4", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "5", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "6", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "7", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "8", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
	{ id: "9", title: "はじめまして", sabtitle: "はじめましてのブログです。" },
];

export const BlogList = () => {
	return (
		<div>
			{BlogTitle.map((item) => {
				return (
					<div key={item.id}>
						<Link href={`/id/${item.id}`}>
							<a>{item.title}</a>
							<a>{item.sabtitle}</a>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
