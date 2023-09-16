import {queryClient} from "./queryClient";
import {useMutation} from "react-query";
import {orderApi} from "../api/order";
import {QueryName} from "./types";

export const orderStore = {
    useBuyStocks: () => (
        useMutation({
            mutationFn: ({id, price, count}: {id: number, price: number, count: number}) => orderApi.buyStocks(id, price, count),
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryName.getBuyStocks, QueryName.getSellStocks, QueryName.getOurStocks] }),
        })
    ),

    useSellStocks: () => (
        useMutation({
            mutationFn: ({id, price, count}: {id: number, price: number, count: number}) => orderApi.sellStocks(id, price, count),
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryName.getBuyStocks, QueryName.getSellStocks, QueryName.getOurStocks] }),
        })
    )
};