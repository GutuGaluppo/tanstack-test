import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "../types";

export function useProducts() {
	return useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const { data } = await axios.get("https://fakestoreapi.com/products");
			return data as Product[];
		},
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: true,
	});
}
