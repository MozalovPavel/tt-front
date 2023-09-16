import {TStockTableRow} from "../models/StockTable";
import {BuyButton} from "./BuyButton";
import {SellButton} from "./SellButton";
import {TOurStock} from "../api/stockInfo";

export const mainTableColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
    },
    {
        title: 'Can buy',
        dataIndex: 'bestSellBid',
        key: 'bestSellBid',
        render: (_: unknown, record: TStockTableRow) => {
            return (
                <>
                    {record.sellBids?.map(bsb => (
                            <div className={'mainPage-bid'}>
                                <div className={'mainPage-bid_price'}>{bsb.price}</div>
                                <div>{bsb.quantity}</div>
                                <BuyButton id={record.id} />
                            </div>
                        ))}
                </>
            );
        }
    },
    {
        title: 'Can sell',
        dataIndex: 'bestSellBid',
        key: 'bestSellBid',
        render: (_: unknown, record: TStockTableRow) => {
            return (
                <>
                    {record.buyBids?.map(bsb => (
                        <div className={'mainPage-bid'}>
                            <div className={'mainPage-bid_price'}>{bsb.price}</div>
                            <div>{bsb.quantity}</div>
                            {!!record.boughtQuantity && <SellButton id={record.id} />}
                        </div>
                    ))}
                </>
            );
        }
    },
    {
        title: 'Bought Quantity',
        dataIndex: 'boughtQuantity',
        key: 'boughtQuantity',
    },
];

export const boughtTableColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
    },
    {
        title: 'Bought Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (_: unknown, record: TOurStock) => {
            return (
                <div className={'mainPage-bid'}>
                    {record.quantity}
                    <SellButton id={record.id} />
                </div>
            );
        },
    },
];
