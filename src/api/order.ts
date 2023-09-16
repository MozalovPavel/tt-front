export const orderApi = {
    buyStocks: (id: number, price: number, count: number): Promise<void> => {
        console.log({id, price, count})
        return Promise.resolve();
    },
    sellStocks: (id: number, price: number, count: number) => {
        console.log({id, price, count})
        return Promise.resolve();
    },
};