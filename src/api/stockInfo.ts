import {api} from "../lib/api";
import {TBid} from "../models/StockTable";

export type TStock = {
    id: number;
    ticker: string;
};

export type TBuyStockOrder = {
    id: number;
    ticker: string;
    bids: TBid[];
};

export type TSellStockOrder = {
    id: number;
    ticker: string;
    bids: TBid[];
};

export type TOurStock = {
    id: number;
    name: string;
    quantity: number;
}

export const stockInfoApi = {
    getAllStocks: async (): Promise<TStock[]> => {
        const {data} = await api.get('getSymbols');
        return data;
    },
    getBuyStocks: async (): Promise<TBuyStockOrder[]> => {
        const {data} = await api.get('buyStock');
        return data;
    },

    getSellStocks: async (): Promise<TSellStockOrder[]> => {
        const {data} = await api.get('sellStock');
        return data;
    },

    getOurStocks: async (): Promise<TOurStock[]> => {
        const {data: {assets}} = await api.get('info');
        return assets;
    },
};