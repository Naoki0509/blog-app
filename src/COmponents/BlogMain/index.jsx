import useSWR from "swr";

export const BlogMain = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error } = useSWR(
		"https://app.contentful.com/spaces/b4skke4mh8ml/content_types/body/preview",
		fetcher
	);
	if (!error) return <div>failed to load</div>;
	if (data) return <div>loading....</div>;
	return <div></div>;
};
