export type TBid = {
    price?: number;
    quantity: number;
};

export type TStockTableRow = {
    id: number;
    ticker: string;
    sellBids: TBid[];
    buyBids: TBid[];
    boughtQuantity: number;
};
