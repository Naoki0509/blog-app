import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "nblog0509",
	apiKey: process.env.API_KEY,
});
