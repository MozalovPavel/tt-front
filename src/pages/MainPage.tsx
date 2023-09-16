import {stockInfo} from "../store/stockInfo";
import {TBuyStockOrder, TOurStock, TSellStockOrder, TStock} from "../api/stockInfo";
import {TStockTableRow} from "../models/StockTable";
import {Table} from "antd";
import './MainPage.css';
import {boughtTableColumns, mainTableColumns} from "./constants";

const getTableRows = (
    allStocks?: TStock[],
    sellStocks?: TSellStockOrder[],
    buyStocks?: TBuyStockOrder[],
    ourStocks?: TOurStock[],
): TStockTableRow[] => {
    return allStocks?.reduce<TStockTableRow[]>((acc, stock) => {
        const buyStock = buyStocks?.find(bs => bs.id === stock.id && bs.bids.length > 0);
        const sellStock = sellStocks?.find(ss => ss.id === stock.id && ss.bids.length > 0);
        const ourStock = ourStocks?.find(os => os.id === stock.id);

        if (sellStock || (buyStock && ourStock?.quantity)) {
            acc.push({
                id: stock.id,
                ticker: stock.ticker,
                sellBids: sellStock?.bids.sort((a, b) => (a.price || 0) - (b.price || 0)) || [],
                buyBids: buyStock?.bids.sort((a, b) => (b.price || 0) - (a.price || 0)) || [],
                boughtQuantity: ourStock?.quantity || 0
            });
        }

        return acc;
    }, []) || [];
};

const MainPage = () => {
    const { data: ourStocks } = stockInfo.useOurStocks();
    const { data: allStocks } = stockInfo.useAllStocks();
    const { data: sellStocks } = stockInfo.useSellStocks();
    const { data: buyStocks } = stockInfo.useBuyStocks();

    const rows = getTableRows(allStocks, sellStocks, buyStocks, ourStocks);

    const filteredOurStocks = ourStocks?.filter(os => os.quantity);
    console.log({ourStocks})

    return (
        <div className={'mainPage-root'}>
            <Table
                className={'mainPage-root_firstTable'}
                dataSource={rows}
                columns={mainTableColumns}
            />
            <Table
                className={'mainPage-root_secondTable'}
                dataSource={filteredOurStocks}
                columns={boughtTableColumns}
            />
        </div>
    );
};

export default MainPage;