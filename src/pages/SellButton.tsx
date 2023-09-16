import {Button} from "antd";
import {useState} from "react";
import ActionModal from "./ActionModal";
import {orderStore} from "../store/order";

interface ISellButtonProps {
    id: number;
}

export const SellButton = (props: ISellButtonProps) => {
    const { id } = props;

    const [isOpenedModal, setIsOpenedModal] = useState(false);

    const sell = orderStore.useSellStocks();

    const handleSave = (price: number, count: number) => {
        sell.mutate({id, price, count});
    };

    return (
        <>
            <Button onClick={() => setIsOpenedModal(true)}>Sell</Button>
            {isOpenedModal && (
                <ActionModal
                    title={'Sell stocks'}
                    onSave={handleSave}
                    onClose={() => setIsOpenedModal(false)}
                />
            )}
        </>
    );
};