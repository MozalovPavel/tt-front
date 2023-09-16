import {useQuery} from "react-query";
import {QueryName} from "./types";
import {stockInfoApi} from "../api/stockInfo";

export const stockInfo = {
    useAllStocks: () => useQuery({
        queryKey: [QueryName.GetAllStocks],
        queryFn: () => stockInfoApi.getAllStocks(),
    }),
    useBuyStocks: () => useQuery({
        queryKey: [QueryName.getBuyStocks],
        queryFn: () => stockInfoApi.getBuyStocks(),
    }),
    useSellStocks: () => useQuery({
        queryKey: [QueryName.getSellStocks],
        queryFn: () => stockInfoApi.getSellStocks(),
    }),
    useOurStocks: () => useQuery({
        queryKey: [QueryName.getOurStocks],
        queryFn: () => stockInfoApi.getOurStocks(),
    }),
};